import { fetchAll } from "../models/monsterModel.js";

export async function getAll(request,response) {
    
    fetchAll((error, data) => console.log(data) );

}