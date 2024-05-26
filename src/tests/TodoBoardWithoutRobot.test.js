import { expect, describe, test, beforeEach } from '@jest/globals';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoBoard from '../components/TodoBoard';

describe('TodoBoard', () => {
  beforeEach(() => {
    localStorage.clear();
    render(<TodoBoard />);
  });

  test('should add a new task', () => {
    const input = screen.getByPlaceholderText('Add a new task');
    fireEvent.change(input, { target: { value: 'New Task' } });
    const addButton = screen.getByText('Add Task');
    fireEvent.click(addButton);
    expect(screen.getByText('New Task')).toBeInTheDocument();
  });

  test('should move task to next and previous steps', () => {
    const input = screen.getByPlaceholderText('Add a new task');
    fireEvent.change(input, { target: { value: 'New Task' } });
    const addButton = screen.getByText('Add Task');
    fireEvent.click(addButton);
    const nextButton = screen.getByText('Next');
    expect(nextButton).toBeInTheDocument();
    fireEvent.click(nextButton);
    const prevButton = screen.getByText('Previous');
    expect(prevButton).toBeInTheDocument();
    fireEvent.click(prevButton);
    expect(prevButton).not.toBeInTheDocument();
  });

  test('should delete task in done column', async () => {
    const input = screen.getByPlaceholderText('Add a new task');
    fireEvent.change(input, { target: { value: 'New Task' } });
    const addButton = screen.getByText('Add Task');
    fireEvent.click(addButton);
    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
    const secondNextButton = screen.getByText('Next');
    fireEvent.click(secondNextButton);
    const deleteButton = screen.getByText('Delete');
    expect(deleteButton).toBeInTheDocument()
    fireEvent.click(deleteButton);
    expect(screen.queryByText('New Task')).not.toBeInTheDocument();
  });
});
