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

export const increaseProductInCart = (id) => {
  return {
    type: 'INCREASE_PRODUCTINCART',
    id,
  };
};

export const decreaseProductInCart = (id) => {
  return {
    type: 'DECREASE_PRODUCTINCART',
    id,
  };
};

export const updateMyCart = () => {
  return {
    type: 'UPDATE_MYCART',
  };
};

export const productDetail = (payload) => {
  return {
    type: 'PRODUCT_DETAIL',
    payload,
  };
};
