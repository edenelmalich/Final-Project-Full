import { MODAL_TOGGLE_STATE } from '../actions/typesActions';
const initialState = {
  getModalState: false
};
const modalReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case MODAL_TOGGLE_STATE:
      return { ...state, getModalState: !payload };
    default:
      return state;
  }
};
export default modalReducer;
