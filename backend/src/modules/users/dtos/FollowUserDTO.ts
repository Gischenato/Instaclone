import z from 'zod'

export interface FollowUserDTO {
    followerUsername: string,
    followingUsername: string
}

export const FollowUserZod = z.object({
    followerUsername: z.string(),
    followingUsername: z.string()
})