import express from "express";
const app = express();
import { getAll, getOne } from "./controllers/monsterController.js";
  
app.get('/monsters', getAll);
app.get('/monsters/:id', getOne);

app.use( (error, request, response, next)=> {
    //Error handeling middelware
    response.json(error);
    next();
});


export default app;
