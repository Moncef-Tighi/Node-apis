import db from '../connexion_db.js';

export function fetchAll(callback) {
    db.query('SELECT * FROM monsters ORDER BY id ASC', callback);
}

export function fetchOne(id,callback) {
    db.query(`SELECT * FROM monsters WHERE id= ?`,[id] , callback);
}