export const gather_post_data = (postData) => {
    return{
        type: 'GET_POST_DATA',
        payload: postData
    }
}