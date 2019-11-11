import {
  ACCOUNT,
  NOTIFICATIONS,
  CLOSE,
  NAV,
  NAV_SETTING
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
    type: NAV,
    payload: NavState
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
