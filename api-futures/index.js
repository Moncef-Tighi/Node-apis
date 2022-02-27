import express, { response } from "express";
const app = express();
import fs from 'fs';
import bodyParser from 'body-parser';

const data =  JSON.parse(fs.readFileSync("./data/example.json", 'utf8'));
  
app.use(bodyParser.json());

app.get("/fortunes", (request, response)=> {
    response.json(data);
})

app.get('/fortunes/random', (request, response)=> {
    console.log("Requesting a random fortune");
    const randomIndex = Math.floor(Math.random()* data.length);
    const fortune = data[randomIndex];
    response.json(fortune);
})

app.get('/fortunes/:id', (request, response)=> {
    if (request.params.id>data.length) {
        return response.status(404).json({
            status:'ok',
            body : {
                message : "Can't find this fortune"
            }
        })    
    }
    response.json(data.find(fortune => fortune.id === Number(request.params.id)) );
})

app.post('/fortunes', (request, response) => {

    const fortune = {
        id: data.length+1,
        ...request.body
    }
    const updateData = data.concat(fortune); 
    fs.writeFile("./data/example.json", JSON.stringify(updateData), (error) => {if (error) console.log(error)});
    response.status(200).json({
        status:'ok',
        body : {
            message : "New fortune created",
            ...fortune,    
        }
    })
;})

app.patch('/fortunes/:id', (request,response)=> {
    const fortune = data.find(fortune => fortune.id === Number(request.params.id));
    if (!fortune) {
        response.status(404).json({
            status:'ok',
            body : {
                message : "Can't find this fortune"
            }
        });
    }
    const update= {
        ...fortune,
        ...request.body,
    }
    data[request.params.id]=update;
    fs.writeFile("./data/example.json", JSON.stringify(data), (error) => {if (error) console.log(error)});
    response.status(200).json({
        status:'ok',
        body : {
            result : "The fortune have been updated",
            ...update,
        }
    })
})


export default app;