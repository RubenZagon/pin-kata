import React, { FC, useState, useEffect } from "react";
import styled from '@emotion/styled';
import axios from 'axios'
import { Display } from "../display/display";
import { hiddenNumbers } from "../../utils/handlePinCode/handlePinCode";
import { handlePinWhenTheTextIs, pinIsOK, handlePinErrors, keyboardCreator } from "./controllerPinPad";

interface PinpadProps {

}

export const Pinpad: FC<PinpadProps> = (props) => {
  let keyNumbers: number[] = [];
  const [pinDisplay, setPinDisplay] = useState<string>('');
  const [intent, setIntent] = useState<number>(0);
  const [password, setPassword] = useState<string>('');
  const [user, setUser] = useState<string>('')

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const persons = res.data
        setUser(persons[3].name)
      })
  }, [])


  function resetPin(): void {
    setPinDisplay('');
    setPassword('');
  }

  function pressKey(value: number): void {
    let text = value.toString()
    if (pinDisplay.length < 4) {
      setPassword(password + text)
      setPinDisplay(hiddenNumbers(pinDisplay + text));
    }
  }

  // LOGIC DISPLAY
  if (handlePinWhenTheTextIs('OK', pinDisplay, password)) {
    pinIsOK(setPinDisplay, resetPin, setIntent);
    alert(`Bienvenido/a ${user}`) // Lo implemento para una prueba rápida
  }

  if (handlePinWhenTheTextIs('ERROR', pinDisplay, password)) {
    handlePinErrors(intent, setPinDisplay, resetPin, setIntent);
  }

  const Keyboard = keyboardCreator(keyNumbers, pressKey).reverse();

  return (
    <Container>
      <Display text={pinDisplay} />
      <NumbersContainer>
        {Keyboard}
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

button:nth-of-type(10){
  grid-column: 2/3;
}

`
