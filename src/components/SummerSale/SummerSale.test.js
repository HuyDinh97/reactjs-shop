import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import SummerSale from './SummerSale';

const mockStore = configureMockStore();

test('should Summer Sale render correctly', async () => {
  const initialState = {
    common: {
      home: {
        slider: [
          {
            _id: 100001,
            image: 'images/slider/slider-img-1.jpg',
            headline: 'Banner Headline For Fashion #1',
            sort: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            interact: 'product-1',
          },
        ],
      },
    },
  };
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <MemoryRouter>
        <SummerSale />
      </MemoryRouter>
    </Provider>
  );
  await expect(screen.getByTestId('summersale-element')).toBeTruthy();

  const buttons = await screen.findAllByRole('button');
  expect(buttons).toHaveLength(1);
});

test('Should customer comment render failed', async () => {
  const initialState = [];
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <SummerSale />
    </Provider>
  );

  waitFor(() => expect(screen.findByTestId('summersale-error')).toBeTruthy());
});
