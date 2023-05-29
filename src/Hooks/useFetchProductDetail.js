import React from 'react';
import { useDispatch } from 'react-redux';
import { productDetail } from 'store/actions/common';

const useFetchProductDetail = (id) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetch(`https://vnguyen.xyz/huy/day17/apis/index.php?type=product&id=${id}`)
      .then((res) => res.json())
      .then((productDetailData) =>
        dispatch(productDetail(productDetailData.data))
      )
      .catch(() => console.log());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
};

export default useFetchProductDetail;
