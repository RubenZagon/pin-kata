import React from 'react';
import { render } from '@testing-library/react';
import { Pinpad } from '../pinPad';

describe.skip('Pinpad', () => {
  test('render Pinpad', () => {
    const { queryAllByText } = render(<Pinpad />);
    const textElement = queryAllByText(/component/i);
    expect(textElement).toBeInTheDocument();
  });
});