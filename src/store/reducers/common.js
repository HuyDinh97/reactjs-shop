/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
/* eslint-disable no-case-declarations */
const initialState = {
  categories: [],
  popularProducts: [],
  bestSellers: [],
  testtimonials: [],
  productInCart: {
    products: [],
    totalCost: 0,
  },
};

const calculateTotalCost = (products) =>
  products
    .reduce(
      (prevValue, currProduct) =>
        prevValue + (currProduct?.afterSalesPrice ?? 0),
      0
    )
    .toFixed(2);
// eslint-disable-next-line default-param-last
export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CATEGORIES':
      return {
        ...state,
        categories: action.payload.categories,
      };
    case 'ADD_POPULARPRODUCT':
      const { popularProducts } = action.payload;
      const afterSalesPrices = popularProducts.map(
        (prod) => prod.price * (1 - prod.sales / 100)
      );
      let newPopularProduct = [];
      for (let i = 0; i <= popularProducts.length - 1; i++) {
        const realPrice = afterSalesPrices[i];
        popularProducts[i].realPrice = realPrice;
        newPopularProduct = popularProducts;
      }
      console.log(newPopularProduct);
      return {
        ...state,
        popularProducts: [...newPopularProduct],
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
      const { products } = state.productInCart;
      const productIndex = products.findIndex(
        (product) => product._id === action.payload._id
      );

      const productExist = productIndex !== -1;
      const { price, sales, quantity } = action.payload;

      const newQuantity = productExist
        ? products[productIndex].quantity + 1
        : quantity;

      const realPrice = price * newQuantity;
      const afterSalesPrice = realPrice - (realPrice * sales) / 100;

      const newProduct = {
        ...action.payload,
        quantity: newQuantity,
        afterSalesPrice,
      };

      const newProductList = products;
      if (productExist) {
        newProductList[productIndex] = newProduct;
      } else {
        newProductList.push(newProduct);
      }

      return {
        ...state,
        productInCart: {
          products: newProductList,
          totalCost: calculateTotalCost(newProductList),
        },
      };
    case 'DELETE_PRODUCTINCART':
      const productDelete = state.productInCart.products.filter(
        (product) => product._id !== action.payload
      );

      return {
        ...state,
        productInCart: {
          products: [...productDelete],
          totalCost: calculateTotalCost(productDelete),
        },
      };

    default:
      return state;
  }
};
