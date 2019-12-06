import {
  SET_ACCOUNT_TOGGLE,
  SET_NOTIFICATIONS_TOGGLE,
  CLOSE,
  SET_NAV_SETTING_TOGGLE,
  SET_NAV_MOBILE_TOGGLE,
  SET_ACCOUNT_MOBILE
} from './typesActions';
export const setAccountToggle = AccountState => dispatch => {
  dispatch({
    type: SET_ACCOUNT_TOGGLE,
    payload: AccountState
  });
};
export const setNotificationToggle = NotificationState => dispatch => {
  dispatch({
    type: SET_NOTIFICATIONS_TOGGLE,
    payload: NotificationState
  });
};
export const setNavMobileToggle = NavState => dispatch => {
  dispatch({
    type: SET_NAV_MOBILE_TOGGLE,
    payload: NavState
  });
};
export const accountSettings = ToggleAccount => dispatch => {
  dispatch({
    type: SET_ACCOUNT_MOBILE,
    payload: ToggleAccount
  });
};
export const navSetting = settingState => dispatch => {
  dispatch({
    type: SET_NAV_SETTING_TOGGLE,
    payload: settingState
  });
};
export const closeAll = () => dispatch => {
  dispatch({
    type: CLOSE
  });
};
