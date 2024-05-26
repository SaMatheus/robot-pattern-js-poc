import { screen } from '@testing-library/react';
import { expect } from '@jest/globals';
import config from '@pacoteDoMatheuszao'

export const arrange = {
  createTaskAndAdvanceToDone: (name) => {
    config.fillInput('Add a new task', name)
    config.clickButton('Add Task')
    config.clickButton('Next')
    config.clickButton('Next')
  },
  createTask: (name) => {
    config.fillInput('Add a new task', name)
    config.clickButton('Add Task')
  },
};

export const action = {
  moveTaskToNext: () => config.clickButton('Next'),
  moveTaskBackwards: () => config.clickButton('Previous'),
  createTask: (name) => {
    config.fillInput('Add a new task', name)
    config.clickButton('Add Task')
  },
  advanceTaskToInProgress: () => config.clickButton('Next'),
  deleteTask: () => config.clickButton('Delete')
};

export const assert = {
  verifyTaskWasCreated: (name) => expect(screen.queryByText(name)).toBeInTheDocument(),
  verifyTaskIsTodo: () => expect(screen.queryByText('Next')).toBeInTheDocument(),
  verifyTaskIsInProgress: () => {
    expect(screen.queryByText('Next')).toBeInTheDocument()
    expect(screen.queryByText('Previous')).toBeInTheDocument()
  },
  verifyTaskWasDeleted: (name) => expect(screen.queryByText(name)).not.toBeInTheDocument()
};
