import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'
import { AppError } from './errors/AppError'
import routes from './routes'
import { ZodError } from 'zod'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: '*'
}))

app.use((request: Request, response: Response, next: NextFunction) => {
    console.log(`${request.method} ${request.url}`)
    next()
})

app.use(express.json())

app.use(routes)


app.use((error:Error, request:Request, response:Response, next:NextFunction) => {
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    if(error instanceof ZodError){
        return response.status(400).json({
            status: "error",
            message: error.flatten()
        })
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${error.message}`
    })
})

app.listen(3333, () => {
    console.log("Server is running on port 3333 🚀")
})