import React, { FC } from "react";
import styled from '@emotion/styled';

interface DisplayProps {
  className?: string;
  text: string
}

export const Display: FC<DisplayProps> = ({ text }) => {
  return (
    <Container color={selectorColor(text)}>
      <h1>{text}</h1>
    </Container>
  );
};


const Container = styled.div`
@import url('https://fonts.googleapis.com/css?family=ZCOOL+QingKe+HuangYou&display=swap');
font-family: 'ZCOOL QingKe HuangYou', cursive;

@media (min-width: 1024px){
  border-radius:5px;
}

min-width: 100%;
background: ${props => props.color};
box-shadow: 0px 0px 30px 0px rgba(255,226,179,0.5);
color: #1a1b1f;
font-size: 4vh;
margin-bottom: 20px;
display:flex;
justify-content:center;
align-items:center;

h1{
  opacity:0.8;
}
`

function selectorColor(text: string) {
  switch (text) {
    case 'OK':
      return `linear-gradient(90deg, 
        rgba(183,255,179,1) 0%, 
        rgba(126,255,121,1) 5%, 
        rgba(48,255,15,1) 36%, 
        rgba(48,255,15,1) 66%, 
        rgba(151,255,121,1) 95%, 
        rgba(188,255,179,1) 100%);`

    case 'ERROR':
      return `linear-gradient(90deg, 
        rgba(255,179,179,1) 0%, 
        rgba(255,148,121,1) 5%, 
        rgba(255,95,15,1) 36%, 
        rgba(255,95,15,1) 66%, 
        rgba(255,148,121,1) 95%, 
        rgba(255,179,179,1) 100%);`

    case '🔒 LOCKED':
      return `linear-gradient(90deg, rgba(222,222,222,1) 0%, rgba(199,199,199,1) 5%, rgba(177,177,177,1) 36%, rgba(177,177,177,1) 66%, rgba(199,199,199,1) 95%, rgba(222,222,222,1) 100%);`
    default:
      return `linear-gradient(90deg,
        rgba(255,226,179,1) 0%,
        rgba(255,204,121,1) 5%,
        rgba(255,160,112,1) 36%,
        rgba(255,160,112,1) 66%,
        rgba(255,204,122,1) 95%,
        rgba(255,226,179,1) 100%);
      ` }
}