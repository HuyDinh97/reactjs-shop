/* eslint-disable no-plusplus */
/* eslint-disable no-case-declarations */
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
      const productExist = state.productInCart.find(
        (product) => product._id === action.payload._id
      );
      if (!productExist) {
        return {
          ...state,
          productInCart: [...state.productInCart, action.payload],
        };
      }
      const newProductInCart = state.productInCart;
      const productIndex = newProductInCart.findIndex(
        (product) => product._id === action.payload._id
      );
      if (newProductInCart[productIndex].quantity === 1) {
        newProductInCart[productIndex].quantity = 2;
      } else {
        newProductInCart[productIndex].quantity++;
      }
      return {
        ...state,
        productInCart: [...newProductInCart],
      };

    default:
      return state;
  }
};
