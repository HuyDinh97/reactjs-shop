import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import PopularProduct from './Product';

const mockStore = configureMockStore();

test('should slide run correctly', async () => {
  const initialState = {
    data: {
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
        {
          _id: 12444570,
          name: "Orolay Women's Thickened Down Jacket",
          category: 1002,
          thumb: 'images/products/product-img-2.jpg',
          price: 82,
          sales: 0,
          visit: 125,
          quantity: 12,
          order: 2,
          color: 267,
        },
        {
          _id: 12444573,
          name: "Norma Kamali Women's Halter Turtle Side Slit Gown",
          category: 1003,
          thumb: 'images/products/product-img-4.jpg',
          price: 89,
          sales: 0,
          visit: 168,
          quantity: 9,
          order: 215,
          color: 265,
        },
        {
          _id: 12444575,
          name: 'Barefoot Dreams CozyChic Lite Circle Cardi',
          category: 1003,
          thumb: 'images/products/saller-img-2.jpg',
          price: 66,
          sales: 0,
          visit: 20,
          quantity: 1,
          order: 12,
          color: 267,
        },
        {
          _id: 12444577,
          name: "The Drop Women's @lucyswhims Side Button Cropped Turtleneck Sweater",
          category: 1003,
          thumb: 'images/products/saller-img-4.jpg',
          price: 26,
          sales: 0,
          visit: 26,
          quantity: 21,
          order: 958,
          color: 264,
        },
        {
          _id: 12444574,
          name: "Essentials Women's Classic-Fit Lightweight Long-Sleeve V-Neck Sweater (Available in Plus Size)",
          category: 1003,
          thumb: 'images/products/saller-img-1.jpg',
          price: 13,
          sales: 0,
          visit: 20,
          quantity: 1,
          order: 123,
          color: 267,
        },
        {
          _id: 12444572,
          name: "Norma Kamali Women's Halter Turtle Side Slit Gown",
          category: 1003,
          thumb: 'images/products/product-img-4.jpg',
          price: 125,
          sales: 0,
          visit: 168,
          quantity: 9,
          order: 215,
          color: 265,
        },
        {
          _id: 12444576,
          name: "DKNY Men's Modern Fit High Performance Suit Separates",
          category: 1004,
          thumb: 'images/products/saller-img-3.jpg',
          price: 87,
          sales: 0,
          visit: 20,
          quantity: 1,
          order: 12,
          color: 267,
        },
        {
          _id: 12444569,
          name: "The Drop Women's Blake Long Blazer",
          category: 1002,
          thumb: 'images/products/product-img-1.jpg',
          price: 69,
          sales: 10,
          visit: 236,
          quantity: 1,
          order: 125,
          color: 263,
        },
        {
          _id: 12444578,
          name: "Anna-Kaci Women's Stretchy One Shoulder Sparkly Sequin Cocktail Party Mini Dress",
          category: 1001,
          thumb: 'images/products/saller-img-5.jpg',
          price: 226,
          sales: 5,
          visit: 174,
          quantity: 5,
          order: 629,
          color: 268,
        },
      ],
    },
  };
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <PopularProduct />
    </Provider>
  );
  const buttons = await screen.findAllByRole('button');

  expect(screen.findByTestId('popularProducts-element')).toBeTruthy();
  expect(buttons).toHaveLength(2);
});

test('Should popularProducts render failed', () => {
  const initialState = {};
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <PopularProduct />
    </Provider>
  );

  waitFor(() =>
    expect(screen.findByTestId('popularProducts-error')).toBeInTheDocument()
  );
});
