import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ServiceBanner from './ServiceBanner';

test('should ServiceBanner render correctly', () => {
  const Wrapper = render(<ServiceBanner />);
  expect(Wrapper).toMatchSnapshot();
});
