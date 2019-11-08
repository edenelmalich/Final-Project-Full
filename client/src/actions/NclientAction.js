import axios from 'axios';

import { GET_CLIENTS, NCLIENT_SUCCESS, NCLIENT_FAIL } from './typesActions';
import { setAlert } from './alertAction';

export const Nclient = (
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
    const res = await axios.post('api/Nclient', body, config);

    dispatch({
      type: NCLIENT_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    console.error(err.message);
    dispatch({
      type: NCLIENT_FAIL
    });
  }
};

export const GetClients = () => async dispatch => {
  try {
    const res = await axios.get('/api/Nclient');

    dispatch({
      type: GET_CLIENTS,
      payload: res.data
    });
  } catch (err) {
    console.error(err.message);
  }
};
