import {Router} from 'express'
import router from './moviesRouter';

router = Router();

router.get('/', function(request, response) {
    response.json('test');
})




export default router;