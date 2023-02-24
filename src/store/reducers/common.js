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
      const productIndex = state.productInCart.findIndex(
        (product) => product._id === action.payload._id
      );

      const productExist = productIndex !== -1;
      const { price, sales, quantity } = action.payload;

      const newQuantity = productExist
        ? state.productInCart[productIndex].quantity + 1
        : quantity;

      const realPrice = price * newQuantity;
      const afterSalesPrice = realPrice - (realPrice * sales) / 100;
      const newProduct = {
        ...action.payload,
        quantity: newQuantity,
        afterSalesPrice,
      };

      if (productExist) {
        const newState = state.productInCart;
        newState[productIndex] = newProduct;
        return {
          ...state,
          productInCart: [...newState],
        };
      }

      return {
        ...state,
        productInCart: [...state.productInCart, newProduct],
      };

    default:
      return state;
  }
};
