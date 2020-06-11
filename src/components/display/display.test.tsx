import React from 'react';
import { render } from '@testing-library/react';
import { Display } from './display';

describe('Display', () => {
  test('render Display', () => {
    const { getByText } = render(<Display text={"123"} />);
    const textElement = getByText(/123/i);
    expect(textElement).toBeInTheDocument();
  });
});