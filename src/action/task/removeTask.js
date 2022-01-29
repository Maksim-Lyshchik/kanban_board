import { createAction } from '@reduxjs/toolkit';
import { REMOVE_TASK } from './types';

export const removeTask = createAction(
  REMOVE_TASK,
  (id) => ({ payload: id }),
);
