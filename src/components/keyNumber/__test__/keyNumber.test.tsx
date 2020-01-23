import React from 'react';
import { render } from '@testing-library/react';
import { KeyNumber } from '../keyNumber';

describe('Keynumber', () => {
  test('render Keynumber', () => {
    const { getByText } = render(<KeyNumber number={1} />);
    const textElement = getByText(/1/i);
    expect(textElement).toBeInTheDocument();
  });
});