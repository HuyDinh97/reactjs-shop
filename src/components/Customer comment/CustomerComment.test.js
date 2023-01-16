import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import CustomerComment from './CustomerComment';

const mockStore = configureMockStore();

it('should customer comment render correctly', async () => {
  const initialState = {
    data: {
      testimonials: [
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
    },
  };
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <CustomerComment />
    </Provider>
  );

  await expect(screen.getByTestId('testimotional-element')).toBeTruthy();
  // screen.debug();
});

test('Should customer comment render failed', async () => {
  const initialState = [];
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <CustomerComment />
    </Provider>
  );
  screen.debug(undefined, 5000000000000);

  waitFor(() =>
    expect(screen.findByTestId('testimotional-error')).toBeTruthy()
  );
});
