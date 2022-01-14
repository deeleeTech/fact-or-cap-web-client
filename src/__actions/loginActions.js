export const log_in = () => {
    return{
        type: 'SIGN_IN'
    }
}
export const log_out = () => {
    return{
        type: 'SIGN_OUT'
    }
}

export const set_user = (userData) => {
    return{
        type: 'SET_USER',
        payload: userData
    }
}