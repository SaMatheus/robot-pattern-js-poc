import { describe, test, beforeEach } from '@jest/globals';
import { render } from '@testing-library/react';
import TodoBoard from '../components/TodoBoard';
import { arrange, action, assert } from './robots/robotSetup';

describe.only('TodoBoard', () => {
  beforeEach(() => {
    localStorage.clear();
    render(<TodoBoard />);
  });

  test('should add a new task', () => {
    action.createTask('New Task');
    assert.verifyTaskWasCreated('New Task')
  });

  test('should move task to next and previous steps', () => {
    arrange.createTask('New Task')
    action.moveTaskToNext()
    assert.verifyTaskIsInProgress()
    action.moveTaskBackwards()
    assert.verifyTaskIsTodo()
  });

  test('should delete task in done column', async () => {
    arrange.createTaskAndAdvanceToDone('Nova Tarefa')
    action.deleteTask()
    assert.verifyTaskWasDeleted('Nova Tarefa')
  });
});
