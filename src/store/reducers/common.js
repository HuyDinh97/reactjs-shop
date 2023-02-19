const initialState = {
  categories: [],
  popularProducts: [],
  bestSellers: [],
  testtimotionals: [],
  productInCart: [],
};
// eslint-disable-next-line default-param-last
export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CATEGORIES':
      return {
        ...state,
        categories: action.payload.categories,
      };
    case 'ADD_POPULARPRODUCT':
      return {
        ...state,
        popularProducts: action.payload.popularProducts,
      };
    case 'ADD_BESTSELLER':
      return {
        ...state,
        bestSellers: action.payload.bestSellers,
      };
    case 'ADD_TESTIMONIAL':
      return {
        ...state,
        testimonials: action.payload.testimonials,
      };
    case 'ADD_PRODUCTTOCART':
      return {
        ...state,
        productInCart: [...state.productInCart, action.payload],
      };
    default:
      return state;
  }
};
