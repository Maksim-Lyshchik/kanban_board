let prevId = 0;

export const getUnicId = (tasksId) => {
  const maxTaskId = Math.max(...tasksId);
  prevId = maxTaskId > 0 ? maxTaskId : prevId

  return ++prevId;
};
