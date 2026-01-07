import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: var(--color-secondary);
  color: var(--color-text);
  font-size: 1.7rem;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;

  &.orange {
    background-color: var(--color-orange);
  }

  &.gray {
    background-color: var(--color-primary);
  }

  &.spanTwo {
    grid-column: span 2;
  } 
  
`;

export default Button;
