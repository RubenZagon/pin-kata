import React, { FC, useState } from "react";
import styled from '@emotion/styled';
import { KeyNumber } from "../keyNumber/keyNumber";
import { Display } from "../display/display";
import { handlePinCode, checkedPin } from "../../utils/handlePinCode/handlePinCode";

interface PinpadProps {

}

export const Pinpad: FC<PinpadProps> = (props) => {
  let keyNumbers = [];
  const [pinDisplay, setPinDisplay] = useState<string>('');
  const [intent, setIntent] = useState<number>(0);




  function pressKey(value: number): void {
    let text = value.toString()
    if (pinDisplay.length < 4 && pinDisplay !== 'OK') {
      setPinDisplay(pinDisplay + text);
    }
  }

  if (checkedPin(pinDisplay) === 'OK') {
    setPinDisplay('OK');
  }

  if (pinDisplay.length === 4 && checkedPin(pinDisplay) === 'ERROR') {
    if (intent === 2) {
      setPinDisplay('🔒 LOCKED');
      setTimeout(() => {
        setPinDisplay('');
        setIntent(0);
      }, 5000);
    } else {
      setPinDisplay('ERROR');
      setIntent(intent + 1);
      console.log(intent);

      setTimeout(() => setPinDisplay(''), 1000);
    }
  }

  // CREACIÓN DE LAS TECLAS
  for (let i = 0; i < 10; i++) {
    keyNumbers.push(i);
  }

  const Keyboard = keyNumbers.map(numb => {
    return <KeyNumber onClick={() => pressKey(numb)} number={numb} className={'numb' + numb.toString()} />
  })

  // IMPRIMIR COMPONENTE
  return (
    <Container>
      <Display text={pinDisplay} />
      <NumbersContainer>
        {Keyboard.reverse()}
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