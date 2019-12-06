import { SET_CLIENTS_LIST } from '../actions/typesActions';

const initialState = {
  getClientsList: []
};
const newClientsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CLIENTS_LIST:
      return { ...state, getClientsList: payload };
    default:
      return state;
  }
};
export default newClientsReducer;
