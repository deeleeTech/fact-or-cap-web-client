export const gather_NBA_games = (allGames) => {
    return{
        type: 'GET_ALL_NBA_GAMES',
        payload: allGames
    }
}