import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main elements', () => {
  render(<App />);

  const homeLinks = screen.getAllByRole('link',{name: /Home/i});
  expect(homeLinks.length).toBeGreaterThan(0);

  const bookingButton = screen.getByText(/Reserve a Table/i);
  expect(bookingButton).toBeInTheDocument();
});
