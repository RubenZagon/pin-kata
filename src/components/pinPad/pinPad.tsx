import React, {FC, useEffect, useState} from "react";
import axios from 'axios'
import {Display} from "../display/display";
import {checkedPin, hiddenNumbers} from "../../utils/handlePinCode/handlePinCode";
import {keyboardCreator} from "./controllerPinPad";
import {correctPin} from "../../App";
import {Container, NumbersContainer} from "./styles";
import {messageDisplay, PinPadObject} from "./types";

export const Pinpad: FC<{}> = () => {
  let keyNumbers: number[] = [];
  const MESSAGE: { OK: messageDisplay, ERROR: messageDisplay , LOCKED: string} = {
    OK: 'OK',
    ERROR: 'ERROR',
    LOCKED: '🔒 LOCKED'
  };
  const initialStatePinPad: PinPadObject = {
    textOnDisplay: '',
    password: '',
    attemptsCounter: 0
  };
  const [pinPad, setPinPad] = useState<PinPadObject>(initialStatePinPad);

  const [user, setUser] = useState<string>('');
  useEffect(() => {
    // Remember
    console.warn('\nRemember son, the code is :', correctPin);

    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const user = res.data;
        setUser(user[3].name)
      })
  }, []);


  function printTextOnDisplay(text: string) {
    setPinPad({...pinPad, textOnDisplay: text});
  }

  function resetPin(): void {
    setPinPad({
      ...pinPad,
      textOnDisplay: '',
      password: ''
    });
  }

  function pressKey(value: number): void {
    let newNumber = value.toString();
    if (pinPad.textOnDisplay.length < 4) {
      setPinPad({
        ...pinPad,
        password: pinPad.password + newNumber,
        textOnDisplay: hiddenNumbers(pinPad.textOnDisplay + newNumber)
      });
    }
  }

  function textOnDisplayIs(textOnDisplay: messageDisplay): boolean {
    return pinPad.textOnDisplay.length === 4 && checkedPin(pinPad.password) === textOnDisplay;
  }

  if (textOnDisplayIs(MESSAGE.OK)) {
    printTextOnDisplay(MESSAGE.OK);
    resetAllIn(1);
    showWelcomeMessageIn(1);
  }

  function resetAllIn(seconds: number) {
    const time = seconds * 1000;
    setTimeout(() => {
      setPinPad(initialStatePinPad)
    }, time);
  }

  function showWelcomeMessageIn(seconds: number) {
    const time = seconds * 1000;
    setTimeout(() => {
      alert(`Bienvenido/a ${user}`)
    }, time)
  }

  if (textOnDisplayIs("ERROR")) {
    if (pinPad.attemptsCounter === 2) {
      printTextOnDisplay(MESSAGE.LOCKED);
      setTimeout(() => {
        setPinPad(initialStatePinPad);
      }, 30000);
    } else {
      printTextOnDisplay(MESSAGE.ERROR);
      setPinPad({...pinPad, attemptsCounter: pinPad.attemptsCounter + 1});
      setTimeout(() => resetPin(), 1000);
    }
  }

  const Keyboard = keyboardCreator(keyNumbers, pressKey).reverse();


  return (
    <Container>
      <Display text={pinPad.textOnDisplay}/>
      <NumbersContainer>
        {Keyboard}
      </NumbersContainer>
    </Container>
  );
};




