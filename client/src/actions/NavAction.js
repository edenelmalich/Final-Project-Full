import { ACCOUNT, NOTIFICATIONS, CLOSE } from './typesActions';
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
export const closeAll = () => dispatch => {
  dispatch({
    type: CLOSE
  });
};
