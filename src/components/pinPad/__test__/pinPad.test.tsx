import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { Pinpad } from '../pinPad';
import { act } from 'react-dom/test-utils';
jest.useFakeTimers()

describe('Pinpad', () => {
  test('render Pinpad', () => {
    const { queryAllByRole } = render(<Pinpad />);
    const textElement = queryAllByRole(/key/i);
    expect(textElement[0]).toBeInTheDocument();
  });

  test('Código INCORRECTO', () => {
    const { queryAllByRole, getByText } = render(<Pinpad />);
    const textElement = queryAllByRole(/key/i);
    let click = 0;
    while (click < 4) {
      fireEvent.click(textElement[4])
      click++
    }
    const displayText = getByText(/ERROR/i)
    expect(displayText).toBeInTheDocument();
  });

  test.only('Bloqueo del código por agotar intentos', async () => {
    const { queryAllByRole, getByText } = render(<Pinpad />);
    const textElement = queryAllByRole(/key/i);
    await act(() => {
      fireEvent.click(textElement[4])
      fireEvent.click(textElement[4])
      fireEvent.click(textElement[4])
      fireEvent.click(textElement[4])
      console.warn('Primer intento');

      jest.runTimersToTime(2000)
      setTimeout(() => {
        fireEvent.click(textElement[4])
        fireEvent.click(textElement[4])
        fireEvent.click(textElement[4])
        fireEvent.click(textElement[4])
      }, 3000);
      console.warn('Segundo intento');
      jest.runTimersToTime(4000)
      setTimeout(() => {
        fireEvent.click(textElement[4])
        fireEvent.click(textElement[4])
        fireEvent.click(textElement[4])
        fireEvent.click(textElement[4])
      }, 5000);
      jest.runTimersToTime(7000)
      console.warn('Tercer intento');

      const displayText = getByText(/LOCKED/i)
      expect(displayText).toBeInTheDocument();
    })


  });

  test('Código CORRECTO', () => {
    const { queryAllByRole, getByText } = render(<Pinpad />);
    const textElement = queryAllByRole(/key/i);
    fireEvent.click(textElement[5]) // 4
    fireEvent.click(textElement[5]) // 4
    fireEvent.click(textElement[4]) // 5
    fireEvent.click(textElement[4]) // 5
    const displayText = getByText(/OK/i)
    expect(displayText).toBeInTheDocument();
  });
});