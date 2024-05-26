import { screen } from '@testing-library/react';
import { expect, waitFor } from '@jest/globals';
import setup from './utils/setup';

export const __ROBOT_NAME__ = (() => {
  const arrange = {
    // arrange example
    fillLoginForm: () => {
      setup.fillInput('E-mail', 'teste@teste.com');
      setup.fillInput('Senha', 'coxinha123');
    }
  };

  const action = {
    // action example
    clickLoginButton: () => setup.clickButton('Login')
  };
  
  const assert = {
    // assert example
    verifyLoginDataIsValid: async () => {
      await waitFor(() => {
        expect(screen.getByText('Usuário ou senha inválidos.'))
      })
    }
  };

  return {
    arrange,
    action,
    assert
  }
})()
