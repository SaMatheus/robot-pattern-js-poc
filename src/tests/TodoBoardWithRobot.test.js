import { expect, describe, test, beforeEach } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import TodoBoard from '../components/TodoBoard';
import { addTask, moveTask, deleteTask } from './robots';

describe('TodoBoard', () => {
  beforeEach(() => {
    localStorage.clear();
    render(<TodoBoard />);
  });

  test('should add a new task', () => {
    addTask.fillInput('Add a new task', 'New Task');
    expect(screen.getByText('New Task')).toBeInTheDocument();
  });

  test('should move task to next and previous steps', () => {
    moveTask.fillInput('Add a new task', 'New Task')
    moveTask.clickButton('Add Task')
    expect(screen.getByText('Next')).toBeInTheDocument();
    moveTask.clickButton('Next')
    const previousButton = screen.getByText('Previous')
    expect(previousButton).toBeInTheDocument();
    moveTask.clickButton('Previous')
    expect(previousButton).not.toBeInTheDocument();
  });

  test('should delete task in done column', async () => {
    deleteTask.fillInput('Add a new task', 'New Task')
    deleteTask.clickButton('Add Task')
    deleteTask.clickButton('Next')
    deleteTask.clickButton('Next')
    expect(screen.getByText('Delete')).toBeInTheDocument()
    deleteTask.clickButton('Delete')
    expect(screen.queryByText('New Task')).not.toBeInTheDocument();
  });
});
