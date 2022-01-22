const nflGamesReducer = (state = [], action) => {
    switch(action.type){
        case 'GET_ALL_NFL_GAMES':
            return action.payload
        default:
            return state
    }
}
export default nflGamesReducer;