import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Pinpad } from '../pinPad';

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

  test.skip('Bloqueo del código por agotar intentos', () => {
    const { queryAllByRole, getByText } = render(<Pinpad />);
    const textElement = queryAllByRole(/key/i);
    fireEvent.click(textElement[4])

    setTimeout(() => {
      fireEvent.click(textElement[4])
    }, 2000);

    const displayText = getByText(/LOCKED/i)
    expect(displayText).toBeInTheDocument();
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