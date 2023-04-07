
export type CommentsArr = {
    id: number,
    cocktail: string,
    author: string,
    date: Date,
    comment: string,
    icon: string,
}

export const commentsArr = [
    {
        id: 1,
        cocktail: 'Лонг айлэнд',
        author: 'Дарина',
        date: new Date(),
        comment: "Хороший коктейльчик",
        icon: "https://i.ibb.co/M5zKzfv/user.png"
    },
    {
        id: 2,
        cocktail: 'Лонг айлэнд',
        author: 'Максим',
        date: new Date(),
        comment: "Слишком сладкий, но вобщем ничего.",
        icon: "https://i.ibb.co/M5zKzfv/user.png"
    }
]