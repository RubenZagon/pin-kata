import React from 'react';
import { render } from '@testing-library/react';
import {Pinpad} from '../pinPad';

describe('Pinpad', () => {
  test('render Pinpad', () => {
    const { getByText } = render(<Pinpad />);
    const textElement = getByText(/test component/i);
    expect(textElement).toBeInTheDocument();
  });
});