import { fetchAll, fetchOne } from "../models/monsterModel.js";

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