const correctPin = '1235'

// export function handlePinCode(pin: string) {
//   if (!verifyLengthPin(pin)) { return 'El código no puede superar los 4 dígitos' }
//   return checkedPin(pin)
// }

export function checkedPin(pin: string) {
  return correctPin === pin ? 'OK' : 'ERROR'
}

// function verifyLengthPin(pin: string): boolean {
//   return pin.length <= 4 ? true : false
// }

export function hiddenNumbers(pin: string): string {
  return pin.split('').map((el, index) => {
    if (pin.length === index + 1) {
      return el
    } else {
      return '*'
    }
  }).join('');
}
