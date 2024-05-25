import { render, screen, fireEvent } from '@testing-library/react';
import TodoBoard from '../components/TodoBoard';

describe('TodoBoard', () => {
  beforeEach(() => {
    localStorage.clear();
    render(<TodoBoard />);
  });

  it('should add a new task', () => {
    const input = screen.getByPlaceholderText('Add a new task');
    fireEvent.change(input, { target: { value: 'New Task' } });
    const addButton = screen.getByText('Add Task');
    fireEvent.click(addButton);

    expect(screen.getByText('New Task')).toBeInTheDocument();
  });

  it('should move task to next and previous steps', () => {
    const input = screen.getByPlaceholderText('Add a new task');
    fireEvent.change(input, { target: { value: 'New Task' } });
    const addButton = screen.getByText('Add Task');
    fireEvent.click(addButton);

    const task = screen.getByText('New Task');
    const nextButton = task.nextElementSibling;
    fireEvent.click(nextButton);

    expect(screen.getByText('In Progress')).toBeInTheDocument();

    const prevButton = task.querySelector('button');
    fireEvent.click(prevButton);

    expect(screen.getByText('To Do')).toBeInTheDocument();
  });

  it('should delete task in done column', () => {
    const input = screen.getByPlaceholderText('Add a new task');
    fireEvent.change(input, { target: { value: 'New Task' } });
    const addButton = screen.getByText('Add Task');
    fireEvent.click(addButton);

    const task = screen.getByText('New Task');
    const nextButton = task.nextElementSibling;
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    const deleteButton = task.querySelector('button');
    fireEvent.click(deleteButton);

    expect(screen.queryByText('New Task')).not.toBeInTheDocument();
  });
});
