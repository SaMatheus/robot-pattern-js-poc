import { useState, useEffect } from 'react';
import TaskForm from '../TaskForm';
import TaskColumn from '../TaskColumn';
import { ColumnsBox } from './styles';

const TodoBoard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      status: 'To Do',
    };
    setTasks([...tasks, newTask]);
  };

  const moveTaskForward = (task) => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, status: getNextStatus(t.status) } : t
    );
    setTasks(updatedTasks);
  };

  const moveTaskBackward = (task) => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, status: getPreviousStatus(t.status) } : t
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (task) => {
    const updatedTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(updatedTasks);
  };

  const getNextStatus = (status) => {
    if (status === 'To Do') return 'In Progress';
    if (status === 'In Progress') return 'Done';
    return status;
  };

  const getPreviousStatus = (status) => {
    if (status === 'Done') return 'In Progress';
    if (status === 'In Progress') return 'To Do';
    return status;
  };

  const columns = {
    'To Do': tasks.filter((task) => task.status === 'To Do'),
    'In Progress': tasks.filter((task) => task.status === 'In Progress'),
    Done: tasks.filter((task) => task.status === 'Done'),
  };

  return (
    <div>
      <TaskForm addTask={addTask} />
      <ColumnsBox>
        {Object.entries(columns).map(([columnName, tasks]) => (
          <TaskColumn
            key={columnName}
            column={columnName}
            tasks={tasks}
            moveTaskForward={moveTaskForward}
            moveTaskBackward={moveTaskBackward}
            deleteTask={deleteTask}
          />
        ))}
      </ColumnsBox>
    </div>
  );
};

export default TodoBoard;
