import { combineReducers } from 'redux';
import loggedReducer from './isLogin';

const allReducers = combineReducers({
    loggedInStatus: loggedReducer,
});

    export default allReducers;