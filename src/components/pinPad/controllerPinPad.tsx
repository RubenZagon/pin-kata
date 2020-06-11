import React from "react";
import {KeyNumber} from "../keyNumber/keyNumber";
import {checkedPin} from "../../utils/handlePinCode/handlePinCode";


export function keyboardCreator(keyNumbers: number[], pressKey: (value: number) => void) {
  for (let i = 0; i < 10; i++) {
    keyNumbers.push(i);
  }
  return keyNumbers.map(numb => {
    return <KeyNumber key={numb} onClick={() => pressKey(numb)} number={numb}/>;
  });
}


export function handlePinErrors(intent: number, setPinDisplay: React.Dispatch<React.SetStateAction<string>>, resetPin: () => void, setIntent: React.Dispatch<React.SetStateAction<number>>) {
  if (intent === 2) {
    setPinDisplay('🔒 LOCKED');
    setTimeout(() => {
      resetPin();
      setIntent(0);
    }, 30000);
  }
  else {
    setPinDisplay('ERROR');
    setIntent(intent + 1);
    setTimeout(() => resetPin(), 1000);
  }
}


export function pinIsOK(setPinDisplay: React.Dispatch<React.SetStateAction<string>>, resetPin: () => void, setIntent: React.Dispatch<React.SetStateAction<number>>) {
  setPinDisplay('OK');
  setTimeout(() => {
    resetPin();
    setIntent(0);
  }, 1000);
}


export function handleDisplayPinWhenTheTextIs(text: string, pinDisplay: string, password: string) {
  return pinDisplay.length === 4 && checkedPin(password) === text;
}
