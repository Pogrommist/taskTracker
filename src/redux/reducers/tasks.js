import { ADD_TASK } from '../constants/tasks'

const initialState = [
  {id: 1, taskName: 'Test task', taskDescription: 'First task'},
  {id: 2, taskName: 'Test task', taskDescription: 'Second task'},
  {id: 3, taskName: 'Test task', taskDescription: 'Third task'}
]
export function loadTasks(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return action.payload
    default:
      return state
  }
}
