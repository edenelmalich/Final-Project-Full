import {
  NCLIENT_SUCCESS,
  NCLIENT_FAIL,
  GET_CLIENTS
} from '../actions/typesActions';

const initialState = {
  NclientSuccess: null,
  getClients: [],
  SendSuccess: null,
  SendFail: null
};
const NclientReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case NCLIENT_SUCCESS:
      return {
        ...state,
        NclientSuccess: true,
        SendSuccess: true
      };
    case NCLIENT_FAIL:
      return {
        ...state,
        NclientSuccess: false,
        SendSuccess: false,
        SendFail: true
      };
    case GET_CLIENTS:
      return { ...state, getClients: payload };
    default:
      return state;
  }
};
export default NclientReducer;
