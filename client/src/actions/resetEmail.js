import { setAlert } from '../actions/alertAction';
import axios from 'axios';

export const resetEmail = (_id, email) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ _id, email });
  try {
    await axios.post('/api/resetEmail', body, config);

    dispatch(setAlert('דואר אלקטרוני שונה בהצלחה', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};
