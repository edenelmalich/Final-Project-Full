import { SHOW_MUSCLES } from '../actions/typesActions';

const initialState = {
  Muscles_State: false
};
const BuildReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_MUSCLES:
      return { ...state, Muscles_State: !payload };
    default:
      return state;
  }
};
export default BuildReducer;
