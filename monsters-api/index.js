import express from "express";
const app = express();
import monsterRouter from './Routers/monsterRouter.js'
import habitatsRouter from './Routers/habitatsRouter.js';
import vieRouter from './Routers/vieRouter.js';
import bodyParser from 'body-parser';

app.use(bodyParser.json());

app.use('/monsters', monsterRouter);
app.use('/habitats', habitatsRouter);
app.use('/vie', vieRouter);

app.use( (error, request, response, next)=> {
    //Error handeling middelware
    return response.json(error);
});


export default app;
