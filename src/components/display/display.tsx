import React, { FC } from "react";
import styled from '@emotion/styled';

interface DisplayProps {
  className?: string;
  text: string
}

export const Display: FC<DisplayProps> = ({ text }) => {
  return (
    <Container>
      <h1>{text}</h1>
    </Container>
  );
};

const Container = styled.div`
@import url('https://fonts.googleapis.com/css?family=ZCOOL+QingKe+HuangYou&display=swap');
font-family: 'ZCOOL QingKe HuangYou', cursive;

min-width: 100%;
border-radius:5px;
background: linear-gradient(90deg, rgba(255,226,179,1) 0%, rgba(255,204,121,1) 5%, rgba(255,160,112,1) 36%, rgba(255,160,112,1) 66%, rgba(255,204,122,1) 95%, rgba(255,226,179,1) 100%);
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