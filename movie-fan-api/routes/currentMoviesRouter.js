import {Router} from 'express'
import movies from '../data-movies/movies.js';

const router = Router();


router.get('/', function(request, response) {
    let page = request.query.page;
    if (!page) page=1;
    let results = movies.filter(movie=> movie.most_popular);
    const startingIndex= (page-1)*10;

    response.json({
        page,
        results : results.slice(startingIndex, startingIndex+9)
    });
})




export default router;