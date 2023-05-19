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

export const signUpData = (payload) => {
  return {
    type: 'SIGNUP_DATA',
    payload,
  };
};

export const signUpDataReturn = (payload) => {
  return {
    type: 'SIGNUP_DATA_RETURN',
    payload,
  };
};

export const logInData = (payload) => {
  return {
    type: 'LOGIN_DATA',
    payload,
  };
};

export const logInDataReturn = (payload) => {
  return {
    type: 'LOGIN_DATA_RETURN',
    payload,
  };
};
