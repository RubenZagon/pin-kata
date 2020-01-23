import React, { FC } from "react";
import styled from '@emotion/styled';
import { KeyNumber } from "../keyNumber/keyNumber";
import { Display } from "../display/display";

interface PinpadProps {

}

export const Pinpad: FC<PinpadProps> = (props) => {
  let numbers = [];

  for (let i = 0; i < 10; i++) {
    numbers.push(i);
  }

  const listKeys = numbers.map(numb => {
    return <KeyNumber number={numb} className={'numb' + numb.toString()} />
  })
  console.log(numbers);


  return (
    <Container>
      <Display />
      <NumbersContainer>
        {listKeys.reverse()}
      </NumbersContainer>
    </Container>
  );
};

const Container = styled.div`
background: lightcyan;
width:100vw;
height:100vh;

&:last-child(1) {
  background: orange;
  opacity:0.3;
}

display:grid;
grid-template-rows: 1fr 3fr;
`

const NumbersContainer = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr 1fr;

button:nth-child(10){
  grid-column: 2/3;
}

`