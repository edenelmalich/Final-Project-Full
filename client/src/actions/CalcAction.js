import { CALC } from './typesActions';

export const CalcTotal = total => dispatch => {
  dispatch({
    type: CALC,
    payload: total
  });
};
