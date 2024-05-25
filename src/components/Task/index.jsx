/* eslint-disable react/prop-types */
import {TaskWrapper, ButtonBox, DeleteButton } from './styles';

const Task = ({ task, moveTaskForward, moveTaskBackward, deleteTask }) => {
  return (
    <TaskWrapper>
      <h3>{task.title}</h3>
      <ButtonBox>
        {task.status !== 'To Do' && (
          <button onClick={() => moveTaskBackward(task)}>Previous</button>
        )}
        {task.status !== 'Done' && (
          <button onClick={() => moveTaskForward(task)}>Next</button>
        )}
        {task.status === 'Done' && (
          <DeleteButton onClick={() => deleteTask(task)}>
            Delete
          </DeleteButton>
        )}
      </ButtonBox>
    </TaskWrapper>
  );
};

export default Task;
