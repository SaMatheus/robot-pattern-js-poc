# Robot Pattern (POC)

Este projeto é uma Prova de Conceito (POC) que demonstra a eficiência do padrão Robot para escrever testes de ponta a ponta (E2E) e unitários. Caso você não saiba do que estamos falando, recomendo fortemente que você leia [meu aritgo sobre testes unitários com Robot Pattern](#).

## Índice

- [Instalação](#instalação)
- [Execução](#execução)
- [Testes](#testes)
- [Scripts para criação de Robots](#scripts-para-criação-de-robots)
- [Robot Template](#robot-template)

## Instalação

Para instalar as dependências do projeto, siga os passos abaixo:

1. Clone o repositório para a sua máquina local usando `git clone`.
2. Navegue até o diretório do projeto.
3. Execute `npm install` para instalar as dependências do projeto.

## Execução

Para executar o projeto localmente, use o comando `npm run dev` no diretório raiz do projeto.

## Testes

Este projeto utiliza o padrão Robot para escrever testes E2E e unitários. Para executar os testes, use o comando `npm run test` no diretório raiz do projeto.

## Scripts para criação de Robots

Este projeto utiliza um script específico para criar os Robots. Para usar o script de criação de Robots, siga os passos abaixo:

- No diretório raiz do projeto, execute o comando 
```bash
  npm run create-robot nome_do_arquivo
```
- Para mais informações sobre os arquivos `robot` suportados veja a seção [Robot Template](#robot-template)
- Após isso, o script irá criar um novo Robot com base nas informações fornecidas.
<br>

## Robot Template
Por enquanto esse projeto possuí apenas 1 template para criação dos arquivos **robots**. Um exemplo 
visual dele está disponível logo abaixo:

**Template Simples**
```
import { screen } from '@testing-library/react';
import { expect } from '@jest/globals';
import setup from 'robot-test-methods';

export const arrange = {};

export const action = {};

export const assert = {};
```

## Contribuição

Contribuições são sempre bem-vindas. Se você encontrar algum problema ou tiver alguma sugestão, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
