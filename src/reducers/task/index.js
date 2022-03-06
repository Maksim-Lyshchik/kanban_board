import { createReducer } from '@reduxjs/toolkit';
import { addTaskBacklog, removeTaskBacklog } from '../../action/task';
import { changeStatusTask } from '../../action/task/changeStatusTask';

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
  builder.addCase(changeStatusTask, (state, { payload }) => {
    return {
      ...state,
      [payload.id]: {
        ...state[payload.id],
        status: payload?.status,
      },
    };
  });
});
