import { SET_DOCUMENTS_LIST } from '../actions/typesActions';
import { setAlert } from '../actions/alertAction';
import axios from 'axios';
export const setDocuments = () => async dispatch => {
  try {
    const res = await axios.get('/api/health');
    dispatch({
      type: SET_DOCUMENTS_LIST,
      payload: res.data
    });
  } catch (err) {
    console.error(err.message);
  }
};
// Action for delete client from the db
export const deleteHealthClient = _id => async dispatch => {
  try {
    await axios.delete(`api/health/${_id}`);

    dispatch(setAlert(' הצהרת בריאות נמחקה בהצלחה', 'success'));
  } catch (err) {
    dispatch(setAlert('שגיאה זמנית בשרת', 'danger'));
  }
};
