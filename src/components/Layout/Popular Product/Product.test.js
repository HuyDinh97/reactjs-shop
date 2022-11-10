import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Product from './Product';

test('should slide run correctly', async () => {
  render(<Product />);

  const buttons = await screen.findAllByRole('button');
  expect(buttons).toHaveLength(2);
});
