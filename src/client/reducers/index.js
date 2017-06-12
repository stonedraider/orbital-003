import { combineReducers } from 'redux';
import { SwitchThemeReducer } from './switch-theme-reducer.js';
import { FetchApodReducer } from './fetch-apod-reducer.js';

const rootReducer = combineReducers({
    SwitchThemeReducer,
    FetchApodReducer
});

export default rootReducer;