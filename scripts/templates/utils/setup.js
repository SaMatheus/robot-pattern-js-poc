import { screen, fireEvent } from '@testing-library/react';

const setup = {
  interactWithElement: (elementText, event) => {
    const element = screen.getByText(elementText);
    event ? fireEvent.event(element) : fireEvent.click(element);
  },
  fillInput: (placeholderText, value) => {
    const input = screen.getByPlaceholderText(placeholderText);
    fireEvent.change(input, { target: { value } });
  },
  clickButton: (buttonText) => {
    const button = screen.getByText(buttonText);
    fireEvent.click(button);
  },
};

export default setup;
