import { combineReducers } from 'redux';
import loggedReducer from './isLogin';
import userDataReducer from './userData';

const allReducers = combineReducers({
    loggedInStatus: loggedReducer,
    userInfo: userDataReducer
});

export default allReducers;