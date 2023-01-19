import {
  addCategories,
  addPopularProduct,
  addBestSeller,
  addTestimonial,
} from './common';

const productTest = [
  {
    _id: 12444571,
    name: 'Calvin Klein womens Solid Sheath With Chiffon Bell Sleeves Dress',
    category: 1001,
    thumb: 'images/products/product-img-3.jpg',
    price: 11,
    sales: 5,
    visit: 25,
    quantity: 12,
    order: 6,
    color: 263,
  },
];

test('should addCategories from API', () => {
  const action = addCategories({ categories: [{ _id: 1001, name: 'Dress' }] });
  expect(action).toEqual({
    type: 'ADD_CATEGORIES',
    payload: {
      categories: [
        {
          _id: 1001,
          name: 'Dress',
        },
      ],
    },
  });
});

test('should addPopularProduct from API', () => {
  const action = addPopularProduct({
    popularProduct: productTest,
  });
  expect(action).toEqual({
    type: 'ADD_POPULARPRODUCT',
    payload: {
      popularProduct: productTest,
    },
  });
});

test('should addBestSeller from API', () => {
  const action = addBestSeller({
    bestSeller: productTest,
  });
  expect(action).toEqual({
    type: 'ADD_BESTSELLER',
    payload: {
      bestSeller: productTest,
    },
  });
});

test('should addTestimonial from API', () => {
  const action = addTestimonial({
    testimonial: [
      {
        _id: {
          $oid: '63832979fd84c7104672a50d',
        },
        avatar: 'images/testimonial/testi-1.jpg',
        feedback_text:
          'I ordered this product recently and no, they were not the exact color/pattern shown. I did receive a solid purple, solid pink and a white but all but the white was a different hue than shown. As for the patterns, the ones I received were from the same color pallet but different patterns. Hope that helps!',
        customer_name: 'C Owen',
      },
    ],
  });
  expect(action).toEqual({
    type: 'ADD_TESTIMONIAL',
    payload: {
      testimonial: [
        {
          _id: {
            $oid: '63832979fd84c7104672a50d',
          },
          avatar: 'images/testimonial/testi-1.jpg',
          feedback_text:
            'I ordered this product recently and no, they were not the exact color/pattern shown. I did receive a solid purple, solid pink and a white but all but the white was a different hue than shown. As for the patterns, the ones I received were from the same color pallet but different patterns. Hope that helps!',
          customer_name: 'C Owen',
        },
      ],
    },
  });
});
