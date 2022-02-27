import express from "express";

const app = express();

app.get("/fortunes", (request, response)=> {
    response.send("requesting");
})

const port = 3000
app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
});