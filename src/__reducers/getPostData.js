const postDataReducer = (state = null, action) => {
    switch(action.type){
        case 'GET_POST_DATA':
            return action.payload
        default:
            return state
    }
}
export default postDataReducer;