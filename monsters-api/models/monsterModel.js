import db from '../connexion_db.js';

export function fetchAll(callback) {
    db.query('SELECT * FROM monsters', callback);
}