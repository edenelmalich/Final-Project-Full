import axios from 'axios';
import { UPDATE_SUCCESS, UPDATE_FAIL } from './typesActions';
import { setAlert } from './alertAction';

export const update = (firstname, lastname, update) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ firstname, lastname, update });
  try {
    await axios.post('api/updates', body, config);

    dispatch({
      type: UPDATE_SUCCESS
    });
    dispatch(setAlert('הודעה נשלחה בהצלחה', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: UPDATE_FAIL
    });
  }
};
