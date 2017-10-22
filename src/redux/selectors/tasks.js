import { createSelector } from 'reselect'

export const tasks = state => state.loadTasks

export const getTracks = createSelector(
  tasks,
  tasks => tasks
)
