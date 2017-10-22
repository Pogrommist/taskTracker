import { ADD_TASK } from '../constants/tasks'

export function addTask(payload) {
 return dispatch => {
   dispatch({ type: ADD_TASK, payload: payload })
 }
}
