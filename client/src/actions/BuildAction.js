import { SHOW_MUSCLES } from './typesActions';

export const ShowMuscles = ToggleMuscles => dispatch => {
  dispatch({
    type: SHOW_MUSCLES,
    payload: ToggleMuscles
  });
};
