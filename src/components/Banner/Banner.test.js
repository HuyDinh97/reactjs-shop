import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import Banner from './Banner';

test('should Banner run correctly', () => {
  const Wrapper = render(<Banner />);
  expect(Wrapper).not.toBeNull();
});
