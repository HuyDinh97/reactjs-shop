import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import SearchBar from './SearchBar';

test('Should search input render', () => {
  render(
    <MemoryRouter initialEntries={[{ pathname: '/' }]}>
      <SearchBar />
    </MemoryRouter>
  );
  expect(screen.getByTestId('search-input')).toBeInTheDocument();
});

test('Should show cart dropdown', async () => {
  render(
    <MemoryRouter initialEntries={[{ pathname: '/' }]}>
      <SearchBar />
    </MemoryRouter>
  );

  const buttons = await screen.findAllByRole('button');
  expect(buttons).toHaveLength(2);

  userEvent.click(buttons[1]);

  const cartMenu = await screen.findByText('No items in this cart!');
  expect(cartMenu).not.toBeNull();
});
