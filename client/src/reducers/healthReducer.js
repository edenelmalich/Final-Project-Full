import { SET_DOCUMENTS_LIST } from '../actions/typesActions';

const initialState = {
  getDocuments: []
};
const healthReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case SET_DOCUMENTS_LIST:
      return { ...state, getDocuments: payload };
    default:
      return state;
  }
};
export default healthReducer;
