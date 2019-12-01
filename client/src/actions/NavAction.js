import {
  ACCOUNT,
  NOTIFICATIONS,
  CLOSE,
  NAV_SETTING,
  NAV_MOBILE,
  SET_ACCOUNT_MOBILE
} from './typesActions';
export const SetAccount = AccountState => dispatch => {
  dispatch({
    type: ACCOUNT,
    payload: AccountState
  });
};
export const SetNotification = NotificationState => dispatch => {
  dispatch({
    type: NOTIFICATIONS,
    payload: NotificationState
  });
};
export const SetNav = NavState => dispatch => {
  dispatch({
    type: NAV_MOBILE,
    payload: NavState
  });
};
export const AccountSettings = ToggleAccount => dispatch => {
  dispatch({
    type: SET_ACCOUNT_MOBILE,
    payload: ToggleAccount
  });
};
export const navSetting = SettingState => dispatch => {
  dispatch({
    type: NAV_SETTING,
    payload: SettingState
  });
};
export const closeAll = () => dispatch => {
  dispatch({
    type: CLOSE
  });
};
