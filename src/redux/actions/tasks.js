export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export function addTask (task) {
  return dispatch => {
    dispatch({ type: ADD_TASK, payload: task });
  };
}
export function deleteTask (id) {
  return dispatch => {
    dispatch({ type: DELETE_TASK, payload: id });
  };
}
