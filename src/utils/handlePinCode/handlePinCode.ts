import { correctPin } from "../../App";


export function checkedPin(pin: string) {
  return correctPin === pin ? 'OK' : 'ERROR'
}


export function hiddenNumbers(pin: string): string {
  return pin.split('').map((el, index) => {
    if (pin.length === index + 1) {
      return el
    } else {
      return '*'
    }
  }).join('');
}
