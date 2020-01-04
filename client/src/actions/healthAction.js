import { SET_DOCUMENTS_LIST } from '../actions/typesActions';
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
