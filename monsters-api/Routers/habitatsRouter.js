import { getAll, getOne, addOne } from "../controllers/habitatsController.js";
import {Router} from 'express';

const router = Router();

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', addOne);


export default router