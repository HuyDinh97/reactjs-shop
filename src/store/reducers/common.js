/* eslint-disable no-plusplus */
/* eslint-disable no-case-declarations */
const initialState = {
  home: undefined,
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
  const { products } = state.productInCart ? state.productInCart : [];
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
      return {
        ...state,
        popularProducts: [...newPopularProduct],
      };
    case 'ADD_BESTSELLER':
      const { bestSellers } = action.payload;
      const afterSalesPricesBestSeller = bestSellers.map(
        (prod) => prod.price * (1 - prod.sales / 100)
      );
      let newBestSeller = [];
      for (let i = 0; i <= bestSellers.length - 1; i++) {
        const realPrice = afterSalesPricesBestSeller[i];
        bestSellers[i].realPrice = realPrice;
        newBestSeller = bestSellers;
      }
      return {
        ...state,
        bestSellers: [...newBestSeller],
      };
    case 'ADD_TESTIMONIAL':
      return {
        ...state,
        testimonials: action.payload.testimonials,
      };
    case 'ADD_HOME':
      return {
        ...state,
        home: action.payload.data,
      };
    case 'ADD_PRODUCTTOCART':
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
      const afterSalesPerOnePrice = price - (price * sales) / 100;

      const newProduct = {
        ...action.payload,
        quantity: newQuantity,
        afterSalesPrice,
        afterSalesPerOnePrice,
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
        (product) => product._id !== action.id
      );

      return {
        ...state,
        productInCart: {
          products: productDelete,
          totalCost: calculateTotalCost(productDelete),
        },
      };
    case 'INCREASE_PRODUCTINCART':
      const updateInCreaseProduct = state.productInCart.products.map(
        (curProd) => {
          if (curProd._id === action.id) {
            return {
              ...curProd,
              quantity: curProd.quantity + 1,
            };
          }
          return curProd;
        }
      );
      return {
        ...state,
        productInCart: {
          ...state.productInCart,
          products: updateInCreaseProduct,
        },
      };
    case 'DECREASE_PRODUCTINCART':
      const updateDecreaseProduct = state.productInCart.products.map(
        (curProd) => {
          if (curProd._id === action.id) {
            let deacreaseQuantity = curProd.quantity - 1;
            if (deacreaseQuantity <= 0) {
              deacreaseQuantity = 1;
            }

            return {
              ...curProd,
              quantity: deacreaseQuantity,
            };
          }
          return curProd;
        }
      );
      return {
        ...state,
        productInCart: {
          ...state.productInCart,
          products: updateDecreaseProduct,
        },
      };
    case 'UPDATE_MYCART':
      const updateMyCart = state.productInCart.products.map((product) => {
        const realPriceMyCart = product.price * product.quantity;
        const afterSalesPriceMyCart =
          realPriceMyCart - (realPriceMyCart * product.sales) / 100;
        return {
          ...product,
          afterSalesPrice: afterSalesPriceMyCart,
        };
      });
      return {
        ...state,
        productInCart: {
          ...state.productInCart,
          products: updateMyCart,
          totalCost: calculateTotalCost(updateMyCart),
        },
      };
    default:
      return state;
  }
};
