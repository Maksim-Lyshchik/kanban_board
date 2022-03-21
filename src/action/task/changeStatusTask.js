import { createAction } from '@reduxjs/toolkit';
import { CHANGE_STATUS_TASK } from './types';

export const changeStatusTask = createAction(
  CHANGE_STATUS_TASK,
  (task) => ({ payload: { ...task } }),
);
