import axios from 'axios';

import { SET_CLIENTS_LIST } from './typesActions';
import { setAlert } from './alertAction';

export const setNewClient = (
  firstname,
  lastname,
  id,
  phone,
  Type,
  Time,
  Payment,
  Total
) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    firstname,
    lastname,
    id,
    phone,
    Type,
    Time,
    Payment,
    Total
  });

  try {
    await axios.post('api/Nclient', body, config);

    dispatch(setAlert('משתמש נרשם בהצלחה', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

export const getClients = () => async dispatch => {
  try {
    const res = await axios.get('/api/Nclient');

    dispatch({
      type: SET_CLIENTS_LIST,
      payload: res.data
    });
  } catch (err) {
    console.error(err.message);
  }
};