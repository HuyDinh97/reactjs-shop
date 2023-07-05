import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import Header from './Header';

const mockStore = configureMockStore();
test('should Header render correctly', () => {
  const initialState = [];
  const store = mockStore(initialState);
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </Provider>
  );
  expect(screen).toMatchSnapshot();
});
