import * as types from '../actions/action-types';

const initialState = {theme:'white'};

export const SwitchThemeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SWITCH_THEME:
            return action.theme;       
        default:
            return state;
    }
};

export default SwitchThemeReducer;