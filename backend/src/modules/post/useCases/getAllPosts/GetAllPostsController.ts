import { Request, Response } from "express";
import { GetAllPostsUseCase } from "./getAllPostsUseCase";

export class GetAllPostsController {
    async handle(req:Request, res:Response) {
        const getAllPostsUseCase = new GetAllPostsUseCase()

        const result = await getAllPostsUseCase.execute()
        res.header("Access-Control-Allow-Origin", "*")
        return res.status(200).json(result)
    }
}