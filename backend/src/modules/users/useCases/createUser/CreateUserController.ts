import { Request, Response } from "express";
import { CreateUserZod } from "../../dtos/CreateUserDTO";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    async handle(req: Request, res: Response) {
        const { username, password, email } = CreateUserZod.parse(req.body);

        const createUserUseCase = new CreateUserUseCase();

        const result = await createUserUseCase.execute({username, password, email})

        return res.status(201).json(result)
    }
}