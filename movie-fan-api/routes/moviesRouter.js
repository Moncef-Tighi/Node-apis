import {Router} from 'express'

router = Router();


router.get('/', function(request, response) {
    response.json('test');
})




export default router;