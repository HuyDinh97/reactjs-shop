import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

test('should Header render correctly', () => {
  render(<Header />);
  expect(screen).toMatchSnapshot();
});