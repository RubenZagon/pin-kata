import { checkedPin, hiddenNumbers } from "../handlePinCode";
import { correctPin } from "../../../App";


describe('PinCode', () => {
  test('Must hidden the numbers, less the last', () => {
    expect(hiddenNumbers('1245')).toBe('***5');
  });

  test('Checked correct pin', () => {
    expect(checkedPin(correctPin)).toBe('OK');
    expect(checkedPin('6894')).toBe('ERROR');
  });
});
