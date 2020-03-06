import { SET_NOTIFICATIONS_LIST } from './typesActions';
import axios from 'axios';
// Action to get all the client from the db
export const getNotificationsList = () => async dispatch => {
  try {
    const res = await axios.get('/api/notifications');

    dispatch({
      type: SET_NOTIFICATIONS_LIST,
      payload: res.data
    });
  } catch (err) {
    console.error(err.message);
  }
};
export const changeReadMessage = (_id, readMessage) => async dispatch => {
  console.log(_id, readMessage);
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify({ _id, readMessage });
    await axios.post('/api/notifications', body, config);
  } catch (err) {
    console.error(err.message);
  }
};
