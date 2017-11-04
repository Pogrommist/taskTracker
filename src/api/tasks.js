import { api } from '../utils/api/api';

export function loadTasks () {
  return api.get('/tasks/get_all/');
}

export function addTaskRequest (task) {
  const { taskName, taskDescription } = task;
  return api.post('/tasks/add/', { title: taskName, text: taskDescription });
}
