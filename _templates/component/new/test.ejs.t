---
to: src/components/<%= name%>/__test__/<%= name%>.test.tsx
---
import React from 'react';
import { render } from '@testing-library/react';
import {<%= Name%>} from '../<%= name%>';

describe('<%= Name%>', () => {
  test('render <%= Name%>', () => {
    const { getByText } = render(<<%= Name%> />);
    const textElement = getByText(/test component/i);
    expect(textElement).toBeInTheDocument();
  });
});