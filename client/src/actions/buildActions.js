import { SHOW_MUSCLES } from './typesActions';

export const showMuscles = ToggleMuscles => dispatch => {
  dispatch({
    type: SHOW_MUSCLES,
    payload: ToggleMuscles
  });
};
