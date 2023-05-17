import React from 'react';
import { useDispatch } from 'react-redux';
import { addBestSeller } from 'store/actions/common';
import { useGetBestSeller } from 'store/selectors/common';

const useFetchBestSeller = () => {
  const [isSuccess, setIssuccess] = React.useState();
  const dispatch = useDispatch();
  const bestSellers = useGetBestSeller();

  React.useEffect(() => {
    if (bestSellers?.length > 0) {
      setIssuccess(true);
      return;
    }
    fetch(
      'https://vnguyen.xyz/huy/day17/apis/index.php?type=products&filter=best_seller'
    )
      .then((res) => res.json())
      .then((product) => dispatch(addBestSeller({ bestSellers: product.data })))
      .catch(() => setIssuccess(false));
  }, [bestSellers?.length, dispatch]);

  return { bestSellers, isSuccess };
};

export default useFetchBestSeller;
