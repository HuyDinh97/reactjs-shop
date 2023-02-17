import React from 'react';
import { useDispatch } from 'react-redux';
import { useGetMyCart } from 'store/selectors/common';
import { addProductToCart } from 'store/actions/common';

const useFetchMyCart = () => {
  const [isSuccess, setIssuccess] = React.useState();
  const dispatch = useDispatch();
  const productInCart = useGetMyCart();

  React.useEffect(() => {
    if (productInCart?.length > 0) {
      setIssuccess(true);
      return;
    }
    dispatch(addProductToCart({ productInCart }));
  }, [productInCart?.length, dispatch, productInCart]);

  return { productInCart, isSuccess };
};

export default useFetchMyCart;
