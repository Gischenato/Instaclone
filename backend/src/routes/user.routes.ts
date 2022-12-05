import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { FollowUserController } from "../modules/users/useCases/followUser/FollowUserController";

const createUserController = new CreateUserController()
const followUserController = new FollowUserController()

const userRoutes = Router()

userRoutes.post('/', createUserController.handle)
userRoutes.post('/follow', followUserController.handle)

export { userRoutes }