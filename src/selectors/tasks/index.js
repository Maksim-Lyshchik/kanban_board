import { createSelector } from '@reduxjs/toolkit';
import { TypesBlocks } from '../../constants/TypesBlocks';

export const selectTasks = ({ tasks }) => Object.values(tasks);

export const selectBacklogTask = createSelector(
  selectTasks,
  tasks => tasks.filter(({ status }) => status === TypesBlocks.BACKLOG),
);

export const selectReadyTask = createSelector(
  selectTasks,
  tasks => tasks.filter(({ status }) => status === TypesBlocks.READY),
);

export const selectInProgressTask = createSelector(
  selectTasks,
  tasks => tasks.filter(({ status }) => status === TypesBlocks.IN_PROGRESS),
);

export const selectFinishedTask = createSelector(
  selectTasks,
  tasks => tasks.filter(({ status }) => status === TypesBlocks.FINISHED),
);
