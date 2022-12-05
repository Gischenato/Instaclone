import { Router } from 'express'
import { CreatePostController } from '../modules/post/useCases/createPost/CreatePostController'

const createPostController = new CreatePostController()

const postRoutes = Router()

postRoutes.post('/', createPostController.handle)

export { postRoutes }