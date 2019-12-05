import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_FAIL,
  LOGIN_LOAD,
  LOGOUT
} from '../actions/typesActions';

const initialState = {
  token: localStorage.getItem('token'),
  isAuth: null,
  loading: true,
  user: {}
};
const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_LOAD:
      return {
        ...state,
        isAuth: true,
        loading: false,
        user: payload
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuth: true,
        loading: false
      };
    case AUTH_FAIL:
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,

        token: null,
        isAuth: false,
        loading: false
      };

    default:
      return state;
  }
};
export default authReducer;
