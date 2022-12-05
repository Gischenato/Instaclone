import { Request, Response } from "express";
import { FollowUserZod } from "../../dtos/FollowUserDTO";
import { FollowUserUseCase } from "./FollowUserUseCase";

export class FollowUserController {
    async handle(req:Request, res:Response) {
        const { followerUsername, followingUsername } = FollowUserZod.parse(req.body)
        
        const followUserUseCase = new FollowUserUseCase()

        const result = await followUserUseCase.execute({followerUsername, followingUsername})

        return res.status(201).json(result)
    }
}