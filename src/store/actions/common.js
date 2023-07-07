// eslint-disable-next-line import/prefer-default-export
export const addCategories = (payload) => {
  return {
    type: 'ADD_CATEGORIES',
    payload,
  };
};

export const addPopularProduct = (payload) => {
  return {
    type: 'ADD_POPULARPRODUCT',
    payload,
  };
};

export const addBestSeller = (payload) => {
  return {
    type: 'ADD_BESTSELLER',
    payload,
  };
};

export const addTestimonial = (payload) => {
  return {
    type: 'ADD_TESTIMONIAL',
    payload,
  };
};

export const addHome = (payload) => {
  return {
    type: 'ADD_HOME',
    payload,
  };
};

export const addProductToCart = (payload) => {
  return {
    type: 'ADD_PRODUCTTOCART',
    payload,
  };
};

export const deleteProductInCart = (id) => {
  return {
    type: 'DELETE_PRODUCTINCART',
    id,
  };
};

export const adjustProductInCart = (id, isDecrease) => {
  return {
    type: 'ADJUST_PRODUCTINCART',
    id,
    isDecrease,
  };
};

export const updateMyCart = (payload) => {
  return {
    type: 'UPDATE_MYCART',
    payload,
  };
};

export const productDetail = (payload) => {
  return {
    type: 'PRODUCT_DETAIL',
    payload,
  };
};

export const addComment = (payload) => {
  return {
    type: 'ADD_COMMENT',
    payload,
  };
};

export const recentProduct = (payload) => {
  return {
    type: 'RECENT_PRODUCT',
    payload,
  };
};

export const shoplistSortProduct = ({ id, products }) => {
  return {
    type: 'SHOPLIST_SORT_PRODUCT',
    id,
    products,
  };
};

export const shoplistPriceFilter = ({ id, price, products }) => {
  return {
    type: 'SHOPLIST_PRICE_FILTER',
    id,
    price,
    products,
  };
};

export const shoplistOptionSelection = (payload) => {
  return {
    type: 'SHOPLIST_OPTION_SELECTION',
    payload,
  };
};

export const logInData = (payload) => {
  return {
    type: 'LOGIN_DATA',
    payload,
  };
};

export const logInStatus = (payload) => {
  return {
    type: 'LOGIN_STATUS',
    payload,
  };
};

export const searchResultProducts = (payload) => {
  return {
    type: 'SEARCH_RESULT_PRODUCT',
    payload,
  };
};
