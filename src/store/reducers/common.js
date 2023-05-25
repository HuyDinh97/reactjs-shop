/* eslint-disable no-plusplus */

import { format, fromUnixTime } from 'date-fns';
/* eslint-disable no-case-declarations */

const localStorageId = 'productInCart';
const localStorageTotalCost = 'totalCost';
const getData = (data) => {
  const commentsData = localStorage.getItem(data);
  if (!commentsData) return false;
  return JSON.parse(commentsData);
};

const localStorageData = getData(localStorageId);
const localStorageTotalCostData = getData(localStorageTotalCost);

const initialState = {
  home: undefined,
  categories: [],
  popularProducts: [],
  bestSellers: [],
  testtimonials: [],
  productInCart: {
    products: localStorageData || [],
    totalCost: localStorageTotalCostData || 0,
  },
  productDetail: [],
  comment: [],
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

      localStorage.setItem(localStorageId, JSON.stringify(newProductList));
      localStorage.setItem(
        localStorageTotalCost,
        JSON.stringify(calculateTotalCost(newProductList))
      );

      return {
        ...state,
        productInCart: {
          products: newProductList,
          totalCost: calculateTotalCost(newProductList),
        },
      };
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
    case 'DELETE_PRODUCTINCART':
      const productDelete = products.filter(
        (product) => product._id !== action.id
      );

      return {
        ...state,
        productInCart: {
          products: productDelete,
          totalCost: calculateTotalCost(productDelete),
        },
      };
    case 'ADJUST_PRODUCTINCART':
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
      return {
        ...state,
        productInCart: {
          ...state.productInCart,
          products: updateInCreaseProduct,
          totalCost: calculateTotalCost(updateInCreaseProduct),
        },
      };
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
      return {
        ...state,
        productInCart: {
          ...state.productInCart,
          products: updateMyCart,
          totalCost: calculateTotalCost(updateMyCart),
        },
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
    default:
      return state;
  }
};
