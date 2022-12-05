import { Router } from 'express'
import { CreatePostController } from '../modules/post/useCases/createPost/CreatePostController'
import { GetAllPostsController } from '../modules/post/useCases/getAllPosts/GetAllPostsController'
import { GetPostsByUsernameController } from '../modules/post/useCases/getPostsByUsername/GetPostsByUsernameController'

const createPostController = new CreatePostController()
const getAllPostsController = new GetAllPostsController()
const getPostsByUsernameController = new GetPostsByUsernameController()

const postRoutes = Router()

postRoutes.post('/', createPostController.handle)
postRoutes.get('/', getAllPostsController.handle)
postRoutes.get('/user', getPostsByUsernameController.handle)

export { postRoutes }