import React from 'react';
import { render, screen } from '@testing-library/react';
import Moviflix from './App';

test('renders learn react link', () => {
  render(<Moviflix />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
