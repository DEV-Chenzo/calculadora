import styled from "styled-components";

const Button = styled.button.attrs((props) => ({
  children: props.label,
  onClick: props.onClick,
}))`
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: ${(props) => {
    if (props.variant === "orange") return "var(--color-orange)";
    if (props.variant === "gray") return "var(--color-primary)";
    return "var(--color-secondary)";
  }};
  grid-column: ${(props) => (props.double ? "span 2" : "auto")};
  color: var(--color-text);
  font-size: 1.7rem;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
`;


export default Button;
