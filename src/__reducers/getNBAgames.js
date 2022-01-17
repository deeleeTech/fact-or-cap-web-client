const nbaGamesReducer = (state = {}, action) => {
    switch(action.type){
        case 'GET_ALL_NBA_GAMES':
            return action.payload
        default:
            return state
    }
}
export default nbaGamesReducer;