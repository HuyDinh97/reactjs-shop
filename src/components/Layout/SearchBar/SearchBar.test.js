import * as React from 'react';

import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

test('Should search bar render', () => {
  render(<SearchBar />);
  expect(screen.getByTestId('search-input')).toBeInTheDocument();
});
