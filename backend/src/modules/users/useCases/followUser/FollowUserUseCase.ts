import { FollowUserDTO } from "../../dtos/FollowUserDTO";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";
import { Follows } from "@prisma/client";

export class FollowUserUseCase {
    async execute({ followerUsername, followingUsername }: FollowUserDTO): Promise<Follows> {
        const followerExists = await prisma.user.findUnique({
            where: {
                username: followerUsername
            }
        })
        const followingExists = await prisma.user.findUnique({
            where: {
                username: followingUsername
            }
        })
        if (!followerExists && !followingExists) throw new AppError("Users doesnt exists", 404)
        if (!followerExists) throw new AppError("Follower user doesnt exists", 404)
        if (!followingExists) throw new AppError("Following user doesnt exists", 404)
        
        const isAlreadyFollowing = await prisma.follows.findUnique({
            where: {
                followerUsername_followingUsername: {
                    followerUsername,
                    followingUsername
                }
            }
        })
        if (isAlreadyFollowing) throw new AppError("User already following", 400)

        const follow = await prisma.follows.create({
            data: {
                followerUsername,
                followingUsername
            }
        })

        return follow
    }
}