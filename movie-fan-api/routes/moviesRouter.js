import {Router} from 'express'

const router = Router();
import movies from '../data-movies/movies.js';
import movieDetails from '../data-movies/movieDetails.js';

const checkJson = function(request, response, next) {
    if (!request.is('application/json')) {
        return response.status(403).json({
            status : false,
            body : {
                error : "Content type must be application/json"
            },
        })
    }
    next();
}

router.param(('id'), (request, response, next) => {
    console.log("id utilisé");
    next();
})

router.get('/top_rated',(request, response) => {
    let page = request.query.page
    if(!page) page=0;
    const movies = movieDetails.sort( (a,b) => b.vote_average- a.vote_average);
    const startingIndex= (page-1)*10;

    response.json({
        page,
        results : movies.slice(startingIndex, startingIndex+9)
    });
})

// Cette route doit être à la fin des routes avec un seul slash
// Sans ça, ce middelware serait trigger même pour les autres routes
router.get('/:id', function(request, response) {
    const id = Number(request.params.id);
    const movieDetail = movieDetails.find(movie=> movie.id === id)
    if (!movieDetail) return response.json({
        found : false,
        error : "No movie with that id have been found"
    }) 
    response.json({
        found : true,
        movie : movieDetail
    });
})


router.post('movie/:id/rating', checkJson, (request, response) => {
    const id = request.params.id;

    const userRating= request.body.value;
    if (!userRating) return response.status(403).json({msg : 'No rating have been found in the request...'})

    if (userRating<0.5 || userRating>10) return response.status(403).json({msg : 'The rating is out of bound'})


})

router.delete('/:id/rating', (request, response) => {
    const id = request.params.id;

    return response.status(200).json({
        status : true,
        body : {
            msg : "Your rating for this movie have been deleted"
        }
    })
})

export default router;