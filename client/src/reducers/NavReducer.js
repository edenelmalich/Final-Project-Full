import {
  SET_ACCOUNT_TOGGLE,
  SET_NOTIFICATIONS_TOGGLE,
  CLOSE,
  SET_NAV_MOBILE_TOGGLE,
  SET_NAV_SETTING_TOGGLE,
  SET_ACCOUNT_MOBILE,
  SET_NOTIFICATIONS_LIST
} from '../actions/typesActions';
const initialState = {
  accountToggleState: false,
  notificationsToggleState: false,
  mobileToggleState: false,
  settingToggleState: false,
  Account_Mobile: false,
  MenuState: true,
  NotificationsList: []
};

const NavReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ACCOUNT_TOGGLE:
      return {
        ...state,
        accountToggleState: !payload,
        notificationsToggleState: false
      };
    case SET_NOTIFICATIONS_TOGGLE:
      return {
        ...state,
        mobileToggleState: false,
        accountToggleState: false,
        settingToggleState: false,
        notificationsToggleState: !payload
      };
    case SET_NAV_MOBILE_TOGGLE:
      return {
        ...state,
        mobileToggleState: !payload,
        notificationsToggleState: false,
        Account_Mobile: false,
        MenuState: true
      };
    case SET_NAV_SETTING_TOGGLE:
      return {
        ...state,
        settingToggleState: !payload,
        notificationsToggleState: false
      };
    case SET_ACCOUNT_MOBILE:
      return { ...state, Account_Mobile: !payload, MenuState: payload };
    case CLOSE:
      return {
        ...state,
        accountToggleState: false,
        notificationsToggleState: false
      };
    case SET_NOTIFICATIONS_LIST:
      return { ...state, NotificationsList: payload };

    default:
      return state;
  }
};
export default NavReducer;
