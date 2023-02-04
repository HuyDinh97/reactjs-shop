import commonReducer from './common';

test('Should ADD_CATEGORIES case work', () => {
  const categories = [
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
  ];
  const addCategories = commonReducer(
    {},
    {
      type: 'ADD_CATEGORIES',
      payload: {
        categories,
      },
    }
  );
  expect(addCategories).toStrictEqual({
    categories,
  });
});
