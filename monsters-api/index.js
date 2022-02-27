import express from "express";
const app = express();
import monsterRouter from './Routers/monsterRouter.js'
import habitatsRouter from './Routers/habitatsRouter.js';
import bodyParser from 'body-parser';

app.use(bodyParser.json());

app.use('/monsters', monsterRouter);
app.use('/habitats', habitatsRouter);

app.use( (error, request, response, next)=> {
    //Error handeling middelware
    response.json(error);
    next();
});


export default app;
