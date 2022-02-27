import mysql from 'mysql';
import dotenv from 'dotenv';

function connexion() {
    dotenv.config({path:'./config.env'});

    const db= mysql.createConnection({
        host: process.env.HOST,
        user:process.env.USERNAME,
        password : process.env.PASSWORD,
        database: process.env.DATABASE
    })
    db.connect((error) => {
        if (error) return console.log(error.stack);
        console.log("Connexion à la base de donné réussie");
    });    
    return db
}

const db=connexion();

export default db;