import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { server } from '__mocks__/server';
import { rest } from 'msw';
import Categories from './Categories';

test('should categories render correctly', async () => {
  server.use(
    rest.get(
      `https://vnguyen.xyz/huy/day17/apis/index.php`,
      (_req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            data: [
              {
                _id: 1001,
                name: 'Dress',
              },
              {
                _id: 1002,
                name: 'Jackets',
              },
              {
                _id: 1003,
                name: 'Sweater',
              },
              {
                _id: 1004,
                name: 'Vest',
              },
            ],
          })
        );
      }
    )
  );

  render(<Categories />);
  expect(await screen.findByTestId('category-element'));
});

test('should categories render failed', async () => {
  server.use(
    rest.get(
      `https://vnguyen.xyz/huy/day17/apis/index.php`,
      (_req, res, ctx) => {
        return res(ctx.status(400), ctx.json({}));
      }
    )
  );

  render(<Categories />);
  expect(await screen.findByTestId('error-fetch-categories'));
});
