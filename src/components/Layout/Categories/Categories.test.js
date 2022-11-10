import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Categories from './Categories';

test('should Header render correctly', () => {
  const Wrapper = render(<Categories />);
  expect(Wrapper).toMatchSnapshot();
});
