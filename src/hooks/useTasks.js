import { useSelector } from 'react-redux';
import { selectBacklogTask, selectFinishedTask, selectInProgressTask, selectReadyTask } from '../selectors/tasks';
import { TypesBlocks } from '../constants/TypesBlocks';

export const useTasks = () => {
  const backlogTasks = useSelector(selectBacklogTask);
  const readyTasks = useSelector(selectReadyTask);
  const inProgressTasks = useSelector(selectInProgressTask);
  const FinishedTasks = useSelector(selectFinishedTask);

  return [
    {
      blockName: TypesBlocks.BACKLOG,
      tasks: backlogTasks,
      isCreateNewTasks: true,
    },
    {
      blockName: TypesBlocks.READY,
      tasks: readyTasks,
      selectTasks: backlogTasks,
    },
    {
      blockName: TypesBlocks.IN_PROGRESS,
      tasks: inProgressTasks,
      selectTasks: readyTasks,
    },
    {
      blockName: TypesBlocks.FINISHED,
      tasks: FinishedTasks,
      selectTasks: inProgressTasks,
    },
  ];
};
