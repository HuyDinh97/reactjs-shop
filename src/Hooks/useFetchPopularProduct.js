import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useGetPopularProduct } from 'store/selectors/common';
import { addPopularProduct } from 'store/actions/common';

const useFetchPopularProduct = () => {
  const [isSuccess, setIssuccess] = React.useState();
  const dispatch = useDispatch();
  const popularProducts = useGetPopularProduct();

  React.useEffect(() => {
    if (popularProducts?.length > 0) {
      setIssuccess(true);
      return;
    }
    axios
      .get('https://vnguyen.xyz/huy/day17/apis/index.php?type=products')
      .then((res) => {
        dispatch(addPopularProduct({ popularProducts: res.data.data }));
        setIssuccess(true);
      })
      .catch(() => setIssuccess(false));
  }, [popularProducts?.length, dispatch]);

  return { popularProducts, isSuccess };
};

export default useFetchPopularProduct;
