import { SET_DAYS } from './typesActions';

export const setDays = day => dispatch => {
  dispatch({
    type: SET_DAYS,
    payload: day
  });
};
