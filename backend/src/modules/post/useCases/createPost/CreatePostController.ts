import { Request, Response } from "express";
import { CreatePostUseCase } from "./CreatePostUseCase";
import { CreatePostZod } from "../../dtos/CreatePostDTO";

export class CreatePostController {
    async handle(req: Request, res:Response){
        const { author, media } = CreatePostZod.parse(req.body)
        
        const createPostUseCase = new CreatePostUseCase()

        const result = await createPostUseCase.execute({ author, media })

        return res.status(201).json(result)
    }
}