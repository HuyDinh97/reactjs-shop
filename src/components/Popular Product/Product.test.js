import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import PopularProduct from './Product';

const mockStore = configureMockStore();

test('Should slide run correctly', async () => {
  const productsAvailableState = {
    common: {
      popularProducts: [
        {
          _id: 12444571,
          name: 'Calvin Klein womens Solid Sheath With Chiffon Bell Sleeves Dress',
          category: 1001,
          thumb: 'images/products/product-img-3.jpg',
          price: 11,
          sales: 5,
          visit: 25,
          quantity: 12,
          order: 6,
          color: 263,
        },
      ],
    },
  };
  const store = mockStore(productsAvailableState);

  render(
    <Provider store={store}>
      <PopularProduct />
    </Provider>
  );
  const buttons = await screen.findAllByRole('button');
  expect(
    await screen.findByTestId('popularProducts-element')
  ).toBeInTheDocument();
  expect(buttons).toHaveLength(3);
});

test('Should popularProducts render failed', async () => {
  const store = mockStore({});

  render(
    <Provider store={store}>
      <PopularProduct />
    </Provider>
  );

  expect(screen.getByTestId('popularProducts-error')).toBeInTheDocument();
});
