import axios, {AxiosResponse} from "axios"

const url = 'http://localhost:3333'

export interface IPost {
    id: number,
    author_username: string,
    media: string,
    createdAt: string
}

export const getAllPosts = async () => {
    try {
        const response = await axios.get<Array<IPost>>(`${url}/posts`)
        return response 
    }
    catch(error: any) {
        console.log(error);
        return error.response as AxiosResponse<Array<IPost>>
    }

}

export default 1