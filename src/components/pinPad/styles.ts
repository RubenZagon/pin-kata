import styled from "@emotion/styled";

/**
 * primary: #1a1b1f
 * highlight: #FFFFF
 * lightShadows: #242529
 * darkShadows: #151518
 */


export const Container = styled.div`

width: 400px;
height: 600px;

@media(max-width:1024px){
  width:100vw;
  height:100vh;
}

&:last-child(1) {
  background: orange;
  opacity:0.3;
}

display:grid;
grid-template-rows: 1fr 3fr;
`;

export const NumbersContainer = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr 1fr;
grid-column-gap: 20px;
grid-row-gap: 20px;

button:nth-of-type(10){
  grid-column: 2/3;
}

`;