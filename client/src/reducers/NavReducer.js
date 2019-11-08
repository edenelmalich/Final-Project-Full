import { ACCOUNT, NOTIFICATIONS, CLOSE } from '../actions/typesActions';
const initialState = {
  AccountSelected: false,
  NotificationsSelected: false
};

const NavReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACCOUNT:
      return {
        ...state,
        AccountSelected: !payload,
        NotificationsSelected: false
      };
    case NOTIFICATIONS:
      return {
        ...state,
        AccountSelected: false,
        NotificationsSelected: !payload
      };
    case CLOSE:
      return {
        ...state,
        AccountSelected: false,
        NotificationsSelected: false
      };
    default:
      return state;
  }
};
export default NavReducer;
