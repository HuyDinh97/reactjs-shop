import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SummerSale from './SummerSale';

test('should Summer Sale render correctly', async () => {
  render(<SummerSale />);

  const buttons = await screen.findAllByRole('button');
  expect(buttons).toHaveLength(3);
});
