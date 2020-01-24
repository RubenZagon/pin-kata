import { checkedPin, hiddenNumbers } from "../handlePinCode";


describe('PinCode', () => {
  test('Must hidden the numbers, less the last', () => {
    expect(hiddenNumbers('1245')).toBe('***5');
  });

  test('Checked correct pin', () => {
    expect(checkedPin('1235')).toBe('OK');
    expect(checkedPin('6894')).toBe('ERROR');
  });
});
