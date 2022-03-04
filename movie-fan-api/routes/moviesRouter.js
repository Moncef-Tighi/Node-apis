import {Router} from 'express'

const router = Router();
import movies from '../data-movies/movies.js';
import movieDetails from '../data-movies/movieDetails.js';


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

router.get('/top_rated', (request, response) => {

})

router.post('movie/:id/rating', (request, response) => {
    const id = request.params.id;

})

router.delete('movie/:id/rating', (request, response) => {
    const id = request.params.id;

})

export default router;