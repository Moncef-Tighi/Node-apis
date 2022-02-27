import express from "express";
const app = express();
import { getAll } from "./controllers/monsterController.js";
  
app.get('/monsters', getAll);

export default app;
