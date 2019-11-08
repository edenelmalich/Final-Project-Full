import { UPDATE_SUCCESS, UPDATE_FAIL } from '../actions/typesActions';

const initialState = {
  updateSuccess: null
};

const updateReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case UPDATE_SUCCESS:
      return { ...state, updateSuccess: true };
    case UPDATE_FAIL:
      return { ...state, updateSuccess: false };
    default:
      return state;
  }
};
export default updateReducer;
