import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Copyright from './Copyright';

test('should Copyright render correctly', () => {
  const Wrapper = render(<Copyright />);
  expect(Wrapper).toMatchSnapshot();
});
