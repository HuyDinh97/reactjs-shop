import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import SearchBar from './SearchBar';

test('Should search input render', () => {
  render(<SearchBar />);
  expect(screen.getByTestId('search-input')).toBeInTheDocument();
});

test('Should show cart dropdown', async () => {
  render(<SearchBar />);

  const buttons = await screen.findAllByRole('button');
  expect(buttons).toHaveLength(2);

  userEvent.click(buttons[1]);

  const cartMenu = await screen.findByText('No items in this cart!');
  expect(cartMenu).not.toBeNull();
});
