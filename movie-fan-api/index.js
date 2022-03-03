import express, { urlencoded } from "express"
import helmet from "helmet"
const app= express();


app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());
//app.use(express.static());