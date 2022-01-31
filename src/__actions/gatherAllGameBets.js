export const gather_game_bets = (allBets) => {
    return{
        type: 'GET_ALL_GAME_BETS',
        payload: allBets
    }
}