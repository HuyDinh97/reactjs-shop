import { useSelector } from 'react-redux';

// eslint-disable-next-line import/prefer-default-export
export const useGetCategories = () =>
  useSelector((state) =>
    state?.common?.categories?.length > 0 ? state.common.categories : []
  );

export const useGetPopularProduct = () =>
  useSelector((state) =>
    state?.common?.popularProducts?.length > 0
      ? state.common.popularProducts
      : undefined
  );

export const useGetBestSeller = () =>
  useSelector((state) =>
    state?.common?.bestSellers?.length > 0 ? state.common.bestSellers : []
  );

export const useGetTestimonial = () =>
  useSelector((state) =>
    state?.common?.testimonials?.length > 0 ? state.common.testimonials : []
  );

export const useGetMyCart = () =>
  useSelector((state) => state.common?.productInCart);

export const useGetHome = () => useSelector((state) => state.common?.home);

export const useGetProductDetail = () =>
  useSelector((state) => state.common?.productDetail);

export const useGetComments = () =>
  useSelector((state) =>
    state?.common?.comment?.length > 0 ? state.common.comment : []
  );

export const useGetRecentProduct = () =>
  useSelector((state) => state.common?.recentProduct);

export const useGetShopListSortProduct = () =>
  useSelector((state) => state.common?.shoplistSortProduct);

export const useGetFilterPrice = () =>
  useSelector((state) => state.common?.filterPrice);

export const useGetLogInData = () =>
  useSelector((state) =>
    state?.common?.logInData ? state.common.logInData : []
  );

export const useGetLogInStatus = () =>
  useSelector((state) => state.common?.logInStatus);

export const useGetSearchProducts = () =>
  useSelector((state) => state.common?.searchResultProducts);

export const useGetWishList = () =>
  useSelector((state) => state.common?.wishList);
