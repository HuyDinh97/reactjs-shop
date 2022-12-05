import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Categories from './Categories';

test('should Header render correctly', async () => {
  render(<Categories />);
  expect(await screen.findByTestId('category-element'));
});
