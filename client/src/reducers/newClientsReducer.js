import {
  SET_CLIENTS_LIST,
  SET_RETURN_CLIENTS_LIST
} from '../actions/typesActions';

const initialState = {
  getClientsList: [],
  getReturnClients: []
};
const newClientsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CLIENTS_LIST:
      return { ...state, getClientsList: payload };
    case SET_RETURN_CLIENTS_LIST:
      return { ...state, getReturnClients: payload };
    default:
      return state;
  }
};
export default newClientsReducer;
