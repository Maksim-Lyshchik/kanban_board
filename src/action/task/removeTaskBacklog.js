import { createAction } from '@reduxjs/toolkit';
import { REMOVE_TASK_BACKLOG } from './types';

export const removeTaskBacklog = createAction(
  REMOVE_TASK_BACKLOG,
  (id) => ({ payload: id }),
);
