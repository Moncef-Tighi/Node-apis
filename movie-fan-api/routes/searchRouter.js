import {Router} from 'express'

const router = Router();

router.get('/', function(request, response) {
    response.json('test');
})




export default router;