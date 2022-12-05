import { z } from "zod";

export interface CreateUserDTO {
    email: string;
    username: string;
    password: string;
}

export const CreateUserZod = z.object({
    email: z.string(),
    username: z.string(),
    password: z.string()
}).refine((data) => validPassword(data.password), {
    message: "Password must contain at least 8 caracters, 1 uppercase, 1 lowercase and 1 number",
    path: ["invalidPassword"]
})

const validPassword = (password:string) => password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/) != null