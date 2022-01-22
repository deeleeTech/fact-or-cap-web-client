export const gather_NBA_games = (allGames) => {
    return{
        type: 'GET_ALL_NBA_GAMES',
        payload: allGames
    }
}
export const gather_NFL_games = (allGames) => {
    return{
        type: 'GET_ALL_NFL_GAMES',
        payload: allGames
    }
}