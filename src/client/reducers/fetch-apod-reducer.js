import * as types from '../actions/action-types';

const initialState = {date:'2017-01-01'};

export const FetchApodReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_APOD:
            return action.theme;       
        default:
            return state;
    }
};

export default FetchApodReducer;