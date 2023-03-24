import { createReducer } from '@reduxjs/toolkit';
import { addTaskBacklog, removeTaskBacklog } from '../../action/task';

export const tasks = createReducer({}, builder => {
  builder.addCase(addTaskBacklog, (state, { payload }) => {
    return {
      ...state,
      [payload.id]: { ...payload },
    };
  });
  builder.addCase(removeTaskBacklog, (state, { payload }) => {
    const { [payload]: closedTask, ...tasks } = state;
    return tasks;
  });
});
