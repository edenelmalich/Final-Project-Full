import {
  NCLIENT_SUCCESS,
  NCLIENT_FAIL,
  GET_CLIENTS
} from '../actions/typesActions';

const initialState = {
  getClients: [],
  SendFail: null
};
const NclientReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case NCLIENT_FAIL:
      return {
        ...state,
        NclientSuccess: false,
        SendSuccess: false
      };
    case GET_CLIENTS:
      return { ...state, getClients: payload };
    default:
      return state;
  }
};
export default NclientReducer;
