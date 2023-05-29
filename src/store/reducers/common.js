/* eslint-disable no-plusplus */

import { format, fromUnixTime } from 'date-fns';
import {
  getData,
  setLocalStorage,
  calculateTotalCost,
} from './setLocalStorage';
/* eslint-disable no-case-declarations */

const localStorageId = 'productInCart';

const localStorageData = getData(localStorageId);

const initialState = {
  home: undefined,
  categories: [],
  popularProducts: [],
  bestSellers: [],
  testtimonials: [],
  productInCart: {
    products: localStorageData?.products || [],
    totalCost: localStorageData?.totalCost || 0,
  },
  productDetail: [],
  comment: [],
  signUpData: [],
  signUpDataReturn: [],
  logInData: undefined,
  logInDataReturn: [],
  logInStatus: undefined,
};

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
    case 'ADD_PRODUCTTOCART': {
      const productIndex = products.findIndex(
        (product) => product._id === action.payload._id
      );
      const productExist = productIndex !== -1;

      const { price, sales, quantity } = action.payload;

      const newQuantity = productExist
        ? products[productIndex].quantity + quantity
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
      const productInCart = {
        products: newProductList,
        totalCost: calculateTotalCost(newProductList),
      };
      setLocalStorage(localStorageId, productInCart);
      return {
        ...state,
        productInCart,
      };
    }
    case 'PRODUCT_DETAIL':
      const productDetail = action.payload;
      const afterSalesPriceDetail =
        productDetail[0].price * (1 - productDetail[0].sales / 100);
      const available = productDetail[0].quantity > 0 ? 'In Stock' : 'Sold out';
      productDetail[0].available = available;
      productDetail[0].afterSalesPriceDetail = afterSalesPriceDetail;

      const newProductDetail = productDetail[0];
      return {
        ...state,
        productDetail: [newProductDetail],
      };
    case 'DELETE_PRODUCTINCART': {
      const productDelete = products.filter(
        (product) => product._id !== action.id
      );
      const productInCart = {
        products: productDelete,
        totalCost: calculateTotalCost(productDelete),
      };
      setLocalStorage(localStorageId, productInCart);

      return {
        ...state,
        productInCart,
      };
    }
    case 'ADJUST_PRODUCTINCART': {
      const updateInCreaseProduct = products.map((curProd) => {
        let quantityUpdate;
        let newAfterSalesPrice = [];
        if (curProd._id === action.id) {
          if (action.isDecrease === true) {
            quantityUpdate = curProd.quantity > 1 ? curProd.quantity - 1 : 1;
            newAfterSalesPrice = curProd.afterSalesPerOnePrice * quantityUpdate;
          } else {
            quantityUpdate = curProd.quantity + 1;
            newAfterSalesPrice = curProd.afterSalesPerOnePrice * quantityUpdate;
          }
          return {
            ...curProd,
            quantity: quantityUpdate,
            afterSalesPrice: newAfterSalesPrice,
          };
        }
        return curProd;
      });
      const productInCart = {
        products: updateInCreaseProduct,
        totalCost: calculateTotalCost(updateInCreaseProduct),
      };
      setLocalStorage(localStorageId, productInCart);
      return {
        ...state,
        productInCart,
      };
    }
    case 'UPDATE_MYCART':
      const updateMyCart = products.map((curProd) => {
        if (curProd._id.toString() === action.payload._id) {
          const realPriceMyCart = curProd.price * action.payload.quantity;
          const afterSalesPriceMyCart =
            realPriceMyCart - (realPriceMyCart * curProd.sales) / 100;
          return {
            ...curProd,
            quantity: action.payload.quantity,
            afterSalesPrice: afterSalesPriceMyCart,
          };
        }
        return curProd;
      });
      const productInCart = {
        ...state.productInCart,
        products: updateMyCart,
        totalCost: calculateTotalCost(updateMyCart),
      };
      setLocalStorage(localStorageId, productInCart);
      return {
        ...state,
        productInCart,
      };
    case 'ADD_COMMENT':
      try {
        const commentData = action.payload.map((comment) => ({
          ...comment,
          created_at: format(fromUnixTime(comment.created_at), 'MMMM dd, yyyy'),
        }));
        return {
          ...state,
          comment: [...state.comment, ...commentData],
        };
      } catch (e) {
        console.log(e);
      }
      return state;
    case 'SIGNUP_DATA':
      return {
        ...state,
        signUpData: action.payload,
      };
    case 'SIGNUP_DATA_RETURN':
      return {
        ...state,
        signUpDataReturn: action.payload,
      };
    case 'LOGIN_DATA':
      return {
        ...state,
        logInData: action.payload,
      };
    case 'LOGIN_DATA_RETURN':
      return {
        ...state,
        logInDataReturn: action.payload,
      };
    case 'LOGIN_STATUS':
      return {
        ...state,
        logInStatus: action.payload,
      };
    default:
      return state;
  }
};
