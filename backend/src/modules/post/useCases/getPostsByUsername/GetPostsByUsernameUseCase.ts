import { Post } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { GetPostsByUsernameDTO } from "../../dtos/GetPostsByUsernameDTO";

export class GetPostsByUsernameUseCase {
    async execute({ username }: GetPostsByUsernameDTO): Promise<Post[]> {
        const user = await prisma.user.findUnique({
            where: {
                username: username
            }
        })
        
        if (!user) throw new AppError("User doesnt exists", 400)

        const posts = await prisma.post.findMany({
            where: {
                author_username: username
            }
        })

        return posts
    }
}