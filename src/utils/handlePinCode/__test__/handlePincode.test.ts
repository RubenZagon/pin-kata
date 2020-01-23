import { handlePinCode } from "../handlePinCode";


describe('PinCode', () => {
  test('The pin is always max 4 digits long', () => {
    expect(handlePinCode('12345')).toContain('código');
  });

  test('Checked correct pin', () => {
    expect(handlePinCode('1235')).toBe('OK');
    expect(handlePinCode('6894')).toBe('ERROR');
  });
});
