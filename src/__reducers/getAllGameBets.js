const allGameBetsReducer = (state = [], action) => {
    switch(action.type){
        case 'GET_ALL_GAME_BETS':
            return action.payload
        default:
            return state
    }
}
export default allGameBetsReducer;