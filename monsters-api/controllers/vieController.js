import { fetchAll, fetchOne, createOne } from "../models/vieModel.js";

export async function getAll(request,response, next) {
    
    fetchAll((error, data) => {
        if (error) next(error);
        response.status(200).json(data) 
    });

}

export function getOne(request, response, next) {

    fetchOne(request.params.id, (error,data)=> {
        if (error) return next(error);
        if (data.length===0) return next("Impossible de trouver une réponse corresponant à cette querry")
        response.status(200).json(data) 
    });
}

export function addOne(request, response, next) {

    createOne(request.body, (error,data)=> {

        if (error) return next(error);
        if (!data) return next("Erreur : Impossible de créer le nouvel habitat");
        response.status(200).json({
            status : "ok",
            body : {
                message : "Habitat ajouté",
                ...request.body
            }
        }) 
    });
}

