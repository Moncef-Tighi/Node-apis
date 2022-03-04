import {Router} from 'express'
import movies from '../data-movies/movies.js';

const router = Router();


router.get('/', function(request, response) {
    const results = movies.filter(movie=> movie.most_popular);
    response.json(results);
})




export default router;