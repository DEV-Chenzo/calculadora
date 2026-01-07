

import styled from 'styled-components';

const MainContainer = styled.main `
display: grid;
height: 31rem;
width: 21rem;

background-color: #252320;
color: #e4e0d7;
border-radius: 1rem;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
margin-bottom: 2rem;
display: grid;

@media (min-width: 768px) {
 height: 40rem;
width: 35rem ;
}
`

export default MainContainer;
