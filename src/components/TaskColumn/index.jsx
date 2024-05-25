/* eslint-disable react/prop-types */
import Task from '../Task';
import { ColumnsWrapper, TaskList } from './styles'

const TaskColumn = ({
  column,
  tasks,
  moveTaskForward,
  moveTaskBackward,
  deleteTask,
}) => {
  return (
    <ColumnsWrapper>
      <h2>{column}</h2>
      <TaskList>
        {tasks?.map((task) => (
          <Task
            key={task.id}
            task={task}
            moveTaskForward={moveTaskForward}
            moveTaskBackward={moveTaskBackward}
            deleteTask={deleteTask}
          />
        ))}
      </TaskList>
    </ColumnsWrapper>
  );
};

export default TaskColumn;
