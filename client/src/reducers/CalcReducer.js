import { CALC } from '../actions/typesActions';
const initialState = {
  total: 0
};
const CalcReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CALC:
      return { ...state, total: payload };
    default:
      return state;
  }
};
export default CalcReducer;
