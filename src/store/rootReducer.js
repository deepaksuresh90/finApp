import homePageReducer from '../pages/home_page/homeSlice';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    homePage: homePageReducer,
});

export default rootReducer;