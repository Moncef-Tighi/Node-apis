import express from "express";
const app = express();
import fs from 'fs';

const data =  JSON.parse(fs.readFileSync("./data/example.json", 'utf8'));
  

app.get("/fortunes", (request, response)=> {
    response.json(data);
})

app.get('/fortunes/random', (request, response)=> {
    console.log("Requesting a random fortune");
    const randomIndex = Math.floor(Math.random()* data.length);
    const fortune = data[randomIndex];
    response.json(fortune);
})


export default app;