import { screen, fireEvent } from '@testing-library/react';

export const deleteTask = {
  interactWithElement: (elementText) => {
    const element = screen.getByText(elementText);
    fireEvent.click(element);
  },
  fillInput: (placeholderText, value) => {
    const input = screen.getByPlaceholderText(placeholderText);
    fireEvent.change(input, { target: { value } });
  },
  clickButton: (buttonText) => {
    const button = screen.getByText(buttonText);
    fireEvent.click(button);
  }
};
