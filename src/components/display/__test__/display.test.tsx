import React from 'react';
import { render } from '@testing-library/react';
import {Display} from '../display';

describe('Display', () => {
  test('render Display', () => {
    const { getByText } = render(<Display />);
    const textElement = getByText(/test component/i);
    expect(textElement).toBeInTheDocument();
  });
});