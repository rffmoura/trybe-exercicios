import games from './data';

export const getGames = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(games)
        }, 3000)
    })
}

