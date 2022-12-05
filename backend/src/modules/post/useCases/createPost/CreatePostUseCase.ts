import { Post } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreatePostDTO, CreatePostZod } from "../../dtos/CreatePostDTO";

export class CreatePostUseCase {
    async execute({author, media}: CreatePostDTO): Promise<Post> {
        const user = prisma.user.findUnique({
            where: {
                username: author
            }
        })

        if (!user) {
            throw new AppError("O usuario nao existe", 400)
        }

        const post = prisma.post.create({
            data: {
                author_username: author,
                media
            }
        })

        return post
    }
}