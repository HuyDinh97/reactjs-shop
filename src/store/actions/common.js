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

export const addTestimonial = (payload) => {
  return {
    type: 'ADD_TESTIMONIAL',
    payload,
  };
};
