import { combineReducers } from 'redux';
import nbaGamesReducer from './getNBAgames';
import nflGamesReducer from './getNFLgames';
import postDataReducer from './getPostData';
import loggedReducer from './isLogin';
import userDataReducer from './userData';

const allReducers = combineReducers({
    loggedInStatus: loggedReducer,
    userInfo: userDataReducer,
    allNBA : nbaGamesReducer,
    allNFL : nflGamesReducer,
    postData: postDataReducer
});

export default allReducers;