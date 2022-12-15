import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { server } from '__mocks__/server';
import { rest } from 'msw';
import CustomerComment from './CustomerComment';

test('should customer comment render correctly', async () => {
  server.use(
    rest.get(
      `https://vnguyen.xyz/huy/day17/apis/index.php`,
      (_req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            data: [
              {
                _id: {
                  $oid: '63832979fd84c7104672a50d',
                },
                avatar: 'images/testimonial/testi-1.jpg',
                feedback_text:
                  'I ordered this product recently and no, they were not the exact color/pattern shown. I did receive a solid purple, solid pink and a white but all but the white was a different hue than shown. As for the patterns, the ones I received were from the same color pallet but different patterns. Hope that helps!',
                customer_name: 'C Owen',
              },
              {
                _id: {
                  $oid: '63832991fd84c7104672a50e',
                },
                avatar: 'images/testimonial/testi-2.jpg',
                feedback_text:
                  'My daughter is 2 and 1/2 and weighs about 35 pounds and I got her 4s and they were a little small so I would go with maybe 5s so there not so snug unless you like them like that',
                customer_name: 'Chastaine',
              },
              {
                _id: {
                  $oid: '638329a9fd84c7104672a50f',
                },
                avatar: 'images/testimonial/testi-3.jpg',
                feedback_text:
                  'Los calzoncitos son de algodón. La tela es un poquito delgadita, pero todos de esta marca lo son... La talla queda bien. Mi nena es T2 y le quedaron perfectos. Excelente calidad-precio y por la cantidad! El unico detalle es que el estampado que recibí no es igual a la fotografía. Fuera de eso son muy recomendables!',
                customer_name: 'Alejandra Gonzalez',
              },
            ],
          })
        );
      }
    )
  );

  render(<CustomerComment />);
  expect(await screen.findByTestId('testimotional-element'));
});

test('should customer comment render failed', async () => {
  server.use(
    rest.get(
      `https://vnguyen.xyz/huy/day17/apis/index.php`,
      (_req, res, ctx) => {
        return res(ctx.status(400), ctx.json({}));
      }
    )
  );

  render(<CustomerComment />);
  expect(await screen.findByTestId('error-fetch-blog'));
});
