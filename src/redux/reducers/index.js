import { combineReducers } from 'redux'
import { loadTasks } from './tasks'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  loadTasks,
  form: formReducer
})

export default rootReducer
