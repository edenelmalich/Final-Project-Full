import { GET_CLIENTS } from '../actions/typesActions';

const initialState = {
  getClients: []
};
const NclientReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CLIENTS:
      return { ...state, getClients: payload };
    default:
      return state;
  }
};
export default NclientReducer;
