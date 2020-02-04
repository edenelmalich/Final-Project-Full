import { SHOW_MUSCLES, SEND_EXERCISES } from './typesActions';
import axios from 'axios';
export const showMuscles = ToggleMuscles => dispatch => {
  dispatch({
    type: SHOW_MUSCLES,
    payload: ToggleMuscles
  });
};
export const SetExercises = Exercises => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ Exercises });
  try {
    const res = await axios.post('api/exercises', body, config);
    dispatch({
      type: SEND_EXERCISES,
      payload: res.data
    });
  } catch (err) {
    console.error(err.message);
  }
};
