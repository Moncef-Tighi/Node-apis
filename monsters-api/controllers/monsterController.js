import { fetchAll, fetchOne, createOne } from "../models/monsterModel.js";

export async function getAll(request,response, next) {
    
    fetchAll((error, data) => {
        if (error) next(error);
        response.status(200).json(data) 
    });

}

export function getOne(request, response, next) {

    fetchOne(request.params.id, (error,data)=> {
        if (error) next(error);
        response.status(200).json(data) 
    });
}

export function addOne(request, response, next) {

    createOne(request.body, (error,data)=> {

        if (error) return next(error);
        if (!data) return next("Erreur : Impossible de créer le nouveau monstre");
        response.status(200).json({
            status : "ok",
            body : {
                message : "Monstre ajouté",
                ...request.body
            }
        }) 
    });
}

