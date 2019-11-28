import { SET_CLIENTS } from '../actions/typesActions';

const initialState = {
  clientsList: []
};
const NclientReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CLIENTS:
      return { ...state, clientsList: payload };
    default:
      return state;
  }
};
export default NclientReducer;
