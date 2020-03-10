import { Article } from './article';

export const ARTICLES: Article[] = [
    {
        id: 1,
        title: 'Primeiro artigo',
        content: '',
        description: "Meu primeiro artigo, leia :)",
        key: 'my-first-article',
        date: new Date(),
        imageUrl: 'https://www.memesmonkey.com/images/memesmonkey/55/550b4a066a04e332793a78d829ee04a7.jpeg'
    },
    {
        id: 2,
        title: 'Segundo artigo',
        content: '',
        description: "Meu segundo artigo, leia :)",
        key: 'my-second-article',
        date: new Date(),
        imageUrl: 'https://i.pinimg.com/236x/d1/07/17/d107178c10a908b3ec8aae3082f6dd58.jpg'
    }
]