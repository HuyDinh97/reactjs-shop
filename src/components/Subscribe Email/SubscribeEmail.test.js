import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SubscribeEmail from './SubscribeEmail';

test('should email input render', () => {
  render(<SubscribeEmail />);
  expect(screen.getByTestId('email-input')).toBeInTheDocument();
});

test('should subscribe email button run', async () => {
  render(<SubscribeEmail />);
  const subscribeBtn = await screen.findAllByRole('button');
  expect(subscribeBtn).toHaveLength(1);
});
