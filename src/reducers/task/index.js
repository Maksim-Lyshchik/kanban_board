import { createReducer } from '@reduxjs/toolkit';
import { addTask, removeTask } from '../../action/task';

export const tasks = createReducer({}, builder => {
  builder.addCase(addTask, (state, { payload }) => {
    return {
      ...state,
      [payload.id]: { ...payload },
    };
  });
  builder.addCase(removeTask, (state, { payload }) => {
    const { [payload]: closedTask, ...tasks } = state;
    return tasks;
  });
});
