import db from '../connexion_db.js';

export function fetchAll(callback) {
    db.query(`SELECT monsters.name AS "Monstre", habitats.name AS "Habitat" FROM vie 
     INNER JOIN monsters ON monsters.id=monster 
     INNER JOIN habitats ON habitats.id=habitat `, callback);
}

export function fetchOne(id,callback) {
    db.query(`SELECT habitats.name AS "Habitats" FROM vie 
    INNER JOIN habitats ON habitats.id=habitat
    WHERE monster=?`,[id] , callback);
}

export function createOne(monster, callback) {
    //UnImplemanted
    return false
    //db.query(`INSERT INTO vie(name, personalit√©) VALUES(?, ?)`,[monster.name, monster.personnalit√©] , callback);
}