import { IPost } from "../../services/api"

const users = [
    {
        name: 'Giovanni',
        avatar: 'https://picsum.photos/200/300'
    },
    {
        name: 'Leticia',
        avatar: 'https://picsum.photos/200/307'
    },
    {
        name: 'Jane Doe',
        avatar: 'https://picsum.photos/200/301'
    },
]

export const posts: Array<IPost> = [
    {
        author_username: 'giovanni',
        createdAt: '2022-01-01T00:00:00.000Z',
        id: 1,
        media: 'https://picsum.photos/seed/15',
    },
]

export const getFakePosts = (qnt:number): Array<IPost> => {
    const posts:Array<IPost> = []
    for(let i = 0; i<qnt; i++){
        posts.push({
            author_username: users[Math.floor(Math.random() * users.length)].name,
            createdAt: new Date().toISOString(),
            id: i,
            media: 'https://picsum.photos/seed/'+(i*Math.random()),
        })
    }
    console.log(posts);
    
    return posts
}