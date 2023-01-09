const initialState = {
  categories: [],
  popularProducts: [],
  testtimotionals: [],
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
    case 'ADD_TESTIMONIAL':
      return {
        ...state,
        testimonials: action.payload.testimonials,
      };
    default:
      return state;
  }
};
