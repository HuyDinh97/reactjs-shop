/* eslint-disable no-plusplus */

import { format, fromUnixTime } from 'date-fns';

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
  productDetail: [],
  quantityDetail: 0,
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
        productDetail.price * (1 - productDetail.sales / 100);
      const available = productDetail.quantity > 0 ? 'In Stock' : 'Sold out';
      productDetail.available = available;
      productDetail.afterSalesPriceDetail = afterSalesPriceDetail;

      const newProductDetail = productDetail;
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
    case 'INCREASE_PRODUCTINCART':
      const updateInCreaseProduct = products.map((curProd) => {
        if (curProd._id === action.id) {
          const newAfterSalesPrice =
            curProd.afterSalesPerOnePrice * (curProd.quantity + 1);
          return {
            ...curProd,
            quantity: curProd.quantity + 1,
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
    case 'DECREASE_PRODUCTINCART':
      const updateDecreaseProduct = products.map((curProd) => {
        if (curProd._id === action.id) {
          let deacreaseQuantity = curProd.quantity - 1;
          if (deacreaseQuantity <= 1) {
            deacreaseQuantity = 1;
          }

          return {
            ...curProd,
            quantity: deacreaseQuantity,
            afterSalesPrice:
              curProd.afterSalesPerOnePrice *
              (curProd.quantity > 1 ? curProd.quantity - 1 : curProd.quantity),
          };
        }
        return curProd;
      });
      return {
        ...state,
        productInCart: {
          ...state.productInCart,
          products: updateDecreaseProduct,
          totalCost: calculateTotalCost(updateDecreaseProduct),
        },
      };
    case 'UPDATE_MYCART':
      const updateMyCart = products.map((product) => {
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
    case 'UPDATE_QUANTITY':
      const quantityDetail = action.payload;
      return {
        ...state,
        quantityDetail: [quantityDetail],
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
