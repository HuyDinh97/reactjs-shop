import axios from 'axios';
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
    axios
      .get(
        'https://vnguyen.xyz/huy/day17/apis/index.php?type=products&filter=best_seller'
      )
      .then((res) => {
        dispatch(addBestSeller({ bestSellers: res.data.data }));
        setIssuccess(true);
      })
      .catch(() => setIssuccess(false));
  }, [bestSellers?.length, dispatch]);

  return { bestSellers, isSuccess };
};

export default useFetchBestSeller;
