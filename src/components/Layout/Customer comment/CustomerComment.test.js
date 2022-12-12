import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import CustomerComment from './CustomerComment';

test('should CustomerComment run correctly', () => {
  const Wrapper = render(<CustomerComment />);

  expect(Wrapper).toMatchSnapshot();
});
