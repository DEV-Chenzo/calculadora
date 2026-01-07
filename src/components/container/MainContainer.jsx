

import styled from 'styled-components';

const MainContainer = styled.main `
display: grid;

width: 21rem;

background-color: var(--color-background);
color: var(--color-text);
border-radius: 1rem;
box-shadow: 0 0 10px #00000037;
margin-bottom: 2rem;
display: grid;

@media (min-width: 768px) {

width: 30rem ;
}
`

export default MainContainer;
