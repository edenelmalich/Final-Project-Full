import { SET_DAYS } from '../actions/typesActions';

const initialState = {
  getDay: null
};

const ExePlanReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_DAYS:
      return { ...state, getDays: payload };
    default:
      return state;
  }
};
export default ExePlanReducer;
