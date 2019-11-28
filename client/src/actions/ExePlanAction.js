import { SET_DAYS } from './typesActions';

export const SetDays = day => dispatch => {
  dispatch({
    type: SET_DAYS,
    payload: day
  });
};
