import { Request, Response} from "express";
import {Movie} from "../model/movie";
import {movieDAO} from '../model/movie';
const movieController = async (req:Request,res:Response)=>{


    try {
            const result = await movieDAO.getMovies();

            result
                ? res.status(201).json(result)
                : res.status(500).send("Failed to create a new user.");

    } catch (error: any) {

        res.status(400).send(error.message);
    }
}

export default movieController;