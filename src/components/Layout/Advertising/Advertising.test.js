import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Advertising from './Advertising';

test('should Advertising render correctly', () => {
  const wrapper = render(<Advertising />);
  expect(wrapper).toMatchSnapshot();
});
