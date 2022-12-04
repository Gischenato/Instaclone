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

const posts = [
    {
        user: users[0],
        image: `https://picsum.photos/seed/${parseInt(Math.random() * 1000+'')}`,
    },
    {
        user: users[1],
        image: `https://picsum.photos/seed/${parseInt(Math.random() * 1000+'')}`,
    },
    {
        user: users[2],
        image: `https://picsum.photos/seed/${parseInt(Math.random() * 1000+'')}`,
    },
    {
        user: users[0],
        image: `https://picsum.photos/seed/${parseInt(Math.random() * 1000+'')}`,
    },
    {
        user: users[0],
        image: `https://picsum.photos/seed/${parseInt(Math.random() * 1000+'')}`,
    },
    {
        user: users[1],
        image: `https://picsum.photos/seed/${parseInt(Math.random() * 1000+'')}`,
    },
]

export default posts