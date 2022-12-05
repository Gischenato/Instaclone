import { Post } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllPostsUseCase {
    async execute() {
        const posts = (await prisma.post.findMany({
            orderBy: {
                createdAt: "desc"
            }
        }))

        return posts
    }   
}