import { screen } from '@testing-library/react';
import { expect } from '@jest/globals';
import setup from 'robot-test-methods/src/index';

const todoBoardRobot = {
  arrange: {
    createTaskAndAdvanceToDone: (name) => {
      setup.fillInput('Add a new task', name)
      setup.clickButton('Add Task')
      setup.clickButton('Next')
      setup.clickButton('Next')
    },
    createTask: (name) => {
      setup.fillInput('Add a new task', name)
      setup.clickButton('Add Task')
    },
  },
  action: {
    moveTaskToNext: () => setup.clickButton('Next'),
    moveTaskBackwards: () => setup.clickButton('Previous'),
    createTask: (name) => {
      setup.fillInput('Add a new task', name)
      setup.clickButton('Add Task')
    },
    advanceTaskToInProgress: () => setup.clickButton('Next'),
    deleteTask: () => setup.clickButton('Delete')
  },
  assert: {
    verifyTaskWasCreated: (name) => expect(screen.queryByText(name)).toBeInTheDocument(),
    verifyTaskIsTodo: () => expect(screen.queryByText('Next')).toBeInTheDocument(),
    verifyTaskIsInProgress: () => {
      expect(screen.queryByText('Next')).toBeInTheDocument()
      expect(screen.queryByText('Previous')).toBeInTheDocument()
    },
    verifyTaskWasDeleted: (name) => expect(screen.queryByText(name)).not.toBeInTheDocument()
  }
};

export default todoBoardRobot;
