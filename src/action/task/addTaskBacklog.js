import { createAction } from '@reduxjs/toolkit';
import { ADD_TASK_BACKLOG } from './types';

export const addTaskBacklog = createAction(
  ADD_TASK_BACKLOG,
  (task) => ({ payload: { ...task } }),
);
