import { User } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";

export class CreateUserUseCase {
    async execute({ username, email, password}: CreateUserDTO): Promise<User> {
        const emailInUse = await prisma.user.findUnique({
            where: {
                email,
            }
        })
        const userNameInUse = await prisma.user.findUnique({
            where: {
                username,
            }
        })

        if (emailInUse || userNameInUse) {
            let message = "Error"
            if      (emailInUse && userNameInUse) message = "User already exists"
            else if (emailInUse)    message = "Email already in use"
            else if (userNameInUse) message = "Username already in use"
            
            throw new AppError(message)
        }

        const user = await prisma.user.create({
            data: {
                username,
                email, 
                password
            }
        })

        return user
    }
}