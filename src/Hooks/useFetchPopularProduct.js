import React from 'react';
import { useDispatch } from 'react-redux';
import { useGetPopularProduct } from 'store/selectors/common';
import { addPopularProduct } from 'store/actions/common';

const useFetchPopularProduct = () => {
  const dispatch = useDispatch();
  const popularProducts = useGetPopularProduct();

  React.useEffect(() => {
    if (popularProducts?.length > 0) {
      return;
    }
    fetch('https://vnguyen.xyz/huy/day17/apis/index.php?type=products')
      .then((res) => res.json())
      .then((product) =>
        dispatch(addPopularProduct({ popularProducts: product.data }))
      )
      .catch(() => console.log());
  }, [popularProducts?.length, dispatch]);

  return { popularProducts };
};

export default useFetchPopularProduct;
