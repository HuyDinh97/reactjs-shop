import expensesReducer from './common';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    categories: [],
    popularProducts: [],
    bestSellers: [],
    testtimotionals: [],
  });
});
