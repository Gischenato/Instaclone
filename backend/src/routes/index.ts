import { Router } from "express";
import { postRoutes } from "./post.routes";
import { userRoutes } from "./user.routes";

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/posts', postRoutes)

export default routes