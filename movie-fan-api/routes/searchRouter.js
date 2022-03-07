import {Router} from 'express'
import movies from '../data-movies/movies';
import people from '../data-movies/people';

const router = Router();

const checkQuery = function(request,response, next) {
    if (!request.query.query) {
        return response.status(403).json({
            status : false,
            body : {
                error : "Aucun query de recherche n'a été trouvé" 
            }
        })
    }
    next();
}

router.use(checkQuery);

router.get('/movie', function(request, response) {
    const search = request.query.query;
    const found = movies.filter( (movie) => movie.overview.includes(search) || movie.title.includes(search))
    response.json('test');
})

router.get('/search', function(request, response) {
    const search = request.query.query;
    const found = people.filter( (person) => person.overview.includes(search) || person.title.includes(search))

    response.json('test');
})



export default router;