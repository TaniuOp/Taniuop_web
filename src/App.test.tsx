import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('App', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
