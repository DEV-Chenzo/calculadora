import styled from "styled-components";

const GridContainer = styled.section`
  display: grid;
  padding: 1rem;
  margin-top: 0.6rem;
  grid-gap: 0.5rem;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);

`;

export default GridContainer;
