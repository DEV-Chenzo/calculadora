import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 4.8rem;
  background-color: var(--color-secondary);
  color: var(--color-text);
  font-size: 2.2rem;
  border: none;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-radius: 1rem 1rem 0 0;
  text-align: right;

  &&::placeholder {
    text-align: right;
    color: var(--color-tertiary);
 
  }

  &&:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    height: 7rem;
    font-size: 3rem;
  }
`;

export default Input;
