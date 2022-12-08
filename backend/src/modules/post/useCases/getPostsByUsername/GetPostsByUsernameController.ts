import { Request, Response } from "express";
import { GetPostsByUsernameZod } from "../../dtos/GetPostsByUsernameDTO";
import { GetPostsByUsernameUseCase } from "./GetPostsByUsernameUseCase";

export class GetPostsByUsernameController {
    async handle(req:Request, res:Response) {
        const { username } = GetPostsByUsernameZod.parse(req.body)
        
        const getPostsByUsernameUseCase = new GetPostsByUsernameUseCase()

        const result = await getPostsByUsernameUseCase.execute({ username })

        return res.status(200).json(result)
    }

}