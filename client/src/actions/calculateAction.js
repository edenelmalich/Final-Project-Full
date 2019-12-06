import { CALC } from './typesActions';

export const calcTotal = total => dispatch => {
  dispatch({
    type: CALC,
    payload: total
  });
};
