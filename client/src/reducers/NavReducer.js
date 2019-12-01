import {
  ACCOUNT,
  NOTIFICATIONS,
  CLOSE,
  NAV_MOBILE,
  NAV_SETTING,
  SET_ACCOUNT_MOBILE
} from '../actions/typesActions';
const initialState = {
  AccountSelected: false,
  NotificationsSelected: false,
  MobileNav: false,
  SettingState: false,
  Account_Mobile: false,
  MenuState: true
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
        MobileNav: false,
        AccountSelected: false,
        NotificationsSelected: !payload
      };
    case NAV_MOBILE:
      return {
        ...state,
        MobileNav: !payload,
        NotificationsSelected: false,
        Account_Mobile: false,
        MenuState: true
      };
    case NAV_SETTING:
      return {
        ...state,
        SettingState: !payload,
        NotificationsSelected: false
      };
    case SET_ACCOUNT_MOBILE:
      return { ...state, Account_Mobile: !payload, MenuState: payload };
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
