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

export const deleteProductInCart = (payload) => {
  return {
    type: 'DELETE_PRODUCTINCART',
    payload,
  };
};
