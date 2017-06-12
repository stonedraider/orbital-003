import * as types from './action-types';

export const fetchApod = (date) => {
  return {
    type: types.FETCH_APOD,
    date: date
  }
}