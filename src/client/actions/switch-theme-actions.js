import * as types from './action-types';

export const switchTheme = (theme) => {
  return {
    type: types.SWITCH_THEME,
    theme: theme
  }
}