import express from "express"
import helmet from "helmet"
const app= express();

//Routers : 
import {moviesRouter} from './routes/moviesRouter.js';
import {currentMovies} from './routes/currentMovies.js';
import {searchRouter} from './routes/searchRouter.js';

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());
//app.use(express.static());

app.use("/movies", moviesRouter);
app.use("/now_playing", currentMovies);
app.use("/search", searchRouter);