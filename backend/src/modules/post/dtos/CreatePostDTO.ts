import { z } from 'zod'

export interface CreatePostDTO {
    author: string;
    media: string;
}

export const CreatePostZod = z.object({
    author: z.string(),
    media: z.string(),
})