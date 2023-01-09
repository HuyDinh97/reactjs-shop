import { useSelector } from 'react-redux';

// eslint-disable-next-line import/prefer-default-export
export const useGetCategories = () =>
  useSelector((state) =>
    state?.common?.categories?.length > 0 ? state.common.categories : []
  );

export const useGetPopularProduct = () =>
  useSelector((state) =>
    state?.common?.products?.length > 0 ? state.common.categories : []
  );
