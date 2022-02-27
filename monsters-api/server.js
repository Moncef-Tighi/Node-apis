import app from './index.js';
import dotenv from 'dotenv';
dotenv.config({path:'./config.env'});


const port = 3000;

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
});
