import { Request, Response } from "express";
import { GetAllPostsUseCase } from "./getAllPostsUseCase";

export class GetAllPostsController {
    async handle(req:Request, res:Response) {
        const getAllPostsUseCase = new GetAllPostsUseCase()

        const result = await getAllPostsUseCase.execute()

        return res.status(201).json(result)
    }
}