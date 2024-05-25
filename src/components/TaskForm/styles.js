import styled from 'styled-components'

export const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  input {
    padding: 0.5rem;
    font-size: 1rem;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 300px;
  }

  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;

    &&:hover {
      background-color: #0056b3;
    }
  }
`
