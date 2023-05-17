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
  productDetail: [],
  quantityDetail: 0,
  comment: [],
  error: [],
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
    case 'UPDATE_QUANTITY':
      const quantityDetail = action.payload;
      return {
        ...state,
        quantityDetail: [quantityDetail],
      };
    case 'ADD_COMMENT':
      const commentData = action.payload;
      const timeTransfer = action.payload.map((time) => {
        const newDate = new Date(time.created_at).toDateString().split(' ');
        let dayType;
        if (newDate[2] === 1 || newDate[2] === 21 || newDate[2] === 31) {
          dayType = 'st';
        }
        if (newDate[2] === 2 || newDate[2] === 22) {
          dayType = 'nd';
        }
        if (newDate[2] === 3 || newDate[2] === 23) {
          dayType = 'rd';
        } else {
          dayType = 'th';
        }

        const newDateTransfer = `${newDate[1]} ${newDate[2]}${dayType}`;
        return newDateTransfer;
      });
      for (let i = 0; i < commentData.length; i++) {
        commentData[i].created_at = timeTransfer[i];
      }
      return {
        ...state,
        comment: action.payload,
      };
    case 'ADD_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
