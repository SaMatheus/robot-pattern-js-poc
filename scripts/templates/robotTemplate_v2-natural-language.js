import { screen } from '@testing-library/react';
import { expect, waitFor } from '@jest/globals';
import { setup as config } from './utils/setup';

export const __ROBOT_NAME__ = (() => {
  const setup = {
    // arrange example
    fillLoginForm: () => {
      config.fillInput('E-mail', 'teste@teste.com');
      config.fillInput('Senha', 'coxinha123');
    }
  };

  const doThat = {
    // action example
    clickLoginButton: () => config.clickButton('Login')
  };
  
  const assertThat = {
    // assert example
    verifyLoginDataIsValid: async () => {
      await waitFor(() => {
        expect(screen.getByText('Usuário ou senha inválidos.'))
      })
    }
  };

  return {
    setup,
    doThat,
    assertThat
  }
})()
