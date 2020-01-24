import React from 'react';
import { render } from '@testing-library/react';
import { Pinpad } from '../pinPad';

describe('Pinpad', () => {
  test('render Pinpad', () => {
    const { queryAllByRole } = render(<Pinpad />);
    const textElement = queryAllByRole(/key/i);
    expect(textElement[0]).toBeInTheDocument();
  });
});