import React from "react";
import {KeyNumber} from "../keyNumber/keyNumber";


export function keyboardCreator(keyNumbers: number[], pressKey: (value: number) => void) {
  for (let i = 0; i < 10; i++) {
    keyNumbers.push(i);
  }
  return keyNumbers.map(numb => {
    return <KeyNumber key={numb} onClick={() => pressKey(numb)} number={numb}/>;
  });
}

