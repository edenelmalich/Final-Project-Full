import { MODAL_TOGGLE_STATE } from './typesActions';
export const setModalToggle = modalState => dispatch => {
  dispatch({
    type: MODAL_TOGGLE_STATE,
    payload: modalState
  });
};
