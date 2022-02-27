import db from '../connexion_db.js';

export function fetchAll(callback) {
    db.query('SELECT * FROM habitats ORDER BY id ASC', callback);
}

export function fetchOne(id,callback) {
    db.query(`SELECT * FROM habitats WHERE id= ?`,[id] , callback);
}

export function createOne(habitat, callback) {
    db.query(`INSERT INTO habitats(name, climat,température) VALUES(?, ?, ?)`,[habitat.name, habitat.climat, habitat.température] , callback);
}