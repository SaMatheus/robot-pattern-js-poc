import { screen } from '@testing-library/react';
import { expect, waitFor } from '@jest/globals';
import setup from './utils/setup';

export const __ROBOT_NAME_WITH_VARIABLES__ = (({
    arrangeProps,
    actionProps,
    assertProps
  }) => {
  const arrange = {
    // arrange example
    fillLoginForm: () => {
      const { email, password } = arrangeProps.fillLoginForm;
      setup.fillInput('E-mail', email);
      setup.fillInput('Senha', password);
    }
  };

  const action = {
    // action example
    clickFormButton: () => setup.clickButton(actionProps.clickFormButton.value)
  };
  
  const assert = {
    // assert example
    verifyLoginDataIsValid: async () => {
      const { expectedText } = assertProps.verifyLoginDataIsValid;
      await waitFor(() => {
        expect(screen.getByText(expectedText)).toBeInTheDocument()
      })
    }
  };

  return {
    arrange,
    action,
    assert
  }
})()

