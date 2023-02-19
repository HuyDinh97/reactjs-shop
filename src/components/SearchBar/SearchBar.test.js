import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import SearchBar from './SearchBar';

const mockStore = configureMockStore();
test('Should search input render', () => {
  const store = mockStore();
  render(
    <Provider store={store}>
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByTestId('search-input')).toBeInTheDocument();
});

test('Should show cart dropdown', async () => {
  const productsAvailableState = {
    common: {
      productInCart: [
        {
          _id: 12444571,
          name: 'Calvin Klein womens Solid Sheath With Chiffon Bell Sleeves Dress',
          thumb: 'images/products/product-img-3.jpg',
          price: 11,
          quantity: 1,
        },
      ],
    },
  };
  const store = mockStore(productsAvailableState);

  render(
    <Provider store={store}>
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    </Provider>
  );
  screen.debug(undefined);
  const buttons = await screen.findAllByRole('button');
  expect(buttons).toHaveLength(2);

  userEvent.click(buttons[1]);

  const cartMenu = await screen.findByTestId('dropdownItem-element');
  expect(cartMenu).not.toBeNull();
});
