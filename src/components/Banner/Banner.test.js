import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import Banner from './Banner';

const mockStore = configureMockStore();
test('should Banner run correctly', () => {
  const initialState = [];
  const store = mockStore(initialState);
  const Wrapper = render(
    <Provider store={store}>
      <Banner />
    </Provider>
  );
  expect(Wrapper).not.toBeNull();
});
