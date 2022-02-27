import express from "express";
const app = express();
import connexion from './connexion_db.js';

const db = connexion();

db.query('SELECT * FROM monsters', function (error, results) {
    if (error) throw error;
    console.log(results);
  });



export default app;
