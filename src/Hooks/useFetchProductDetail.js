import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { productDetail, recentProduct } from 'store/actions/common';

const useFetchProductDetail = (id) => {
  const dispatch = useDispatch();
  const [data, setData] = React.useState();
  useEffect(() => {
    if (data) {
      dispatch(productDetail(data));
      dispatch(recentProduct({ data, _id: id }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, id]);

  React.useEffect(() => {
    fetch(`https://vnguyen.xyz/huy/day17/apis/index.php?type=product&id=${id}`)
      .then((res) => res.json())
      .then((productDetailData) => setData(productDetailData.data))
      .catch(() => console.log());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
};

export default useFetchProductDetail;
