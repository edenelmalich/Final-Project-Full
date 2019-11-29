import {
  ACCOUNT,
  NOTIFICATIONS,
  CLOSE,
  NAV_MOBILE,
  NAV_SETTING
} from '../actions/typesActions';
const initialState = {
  AccountSelected: false,
  NotificationsSelected: false,
  MobileNav: false,
  SettingState: false
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
        NotificationsSelected: false
      };
    case NAV_SETTING:
      return {
        ...state,
        SettingState: !payload,
        NotificationsSelected: false
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
