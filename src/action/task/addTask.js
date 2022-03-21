import { createAction } from '@reduxjs/toolkit';
import { ADD_TASK } from './types';

export const addTask = createAction(
  ADD_TASK,
  (task) => ({ payload: { ...task } }),
);
