import axios from 'axios';
import { UPDATE_SUCCESS, UPDATE_FAIL } from './typesActions';

export const update = (firstname, lastname, update) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ firstname, lastname, update });
  try {
    const res = await axios.post('api/updates', body, config);

    dispatch({
      type: UPDATE_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    console.error(err.message);
    dispatch({
      type: UPDATE_FAIL
    });
  }
};
