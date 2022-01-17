import { combineReducers } from 'redux';
import nbaGamesReducer from './getNBAgames';
import loggedReducer from './isLogin';
import userDataReducer from './userData';

const allReducers = combineReducers({
    loggedInStatus: loggedReducer,
    userInfo: userDataReducer,
    allNBA : nbaGamesReducer
});

export default allReducers;