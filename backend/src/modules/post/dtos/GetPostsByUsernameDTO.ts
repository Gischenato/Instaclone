import { z } from 'zod'

export interface GetPostsByUsernameDTO {
    username: string
}

export const GetPostsByUsernameZod = z.object({
    username: z.string(),
})

