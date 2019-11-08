import {
  NCLIENT_SUCCESS,
  NCLIENT_FAIL,
  GET_CLIENTS
} from '../actions/typesActions';

const initialState = {
  NclientSuccess: null,
  getClients: []
};
const NclientReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case NCLIENT_SUCCESS:
      return { ...state, NclientSuccess: true };
    case NCLIENT_FAIL:
      return { ...state, NclientSuccess: false };
    case GET_CLIENTS:
      return { ...state, getClients: payload };
    default:
      return state;
  }
};
export default NclientReducer;
