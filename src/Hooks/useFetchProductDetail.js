import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { productDetail, recentProduct } from 'store/actions/common';
import { useGetRecentProduct } from 'store/selectors/common';

const useFetchProductDetail = (id) => {
  const recentProductData = useGetRecentProduct() || [];
  const dispatch = useDispatch();
  const [data, setData] = React.useState();
  const recentProductExists = recentProductData?.find(
    // eslint-disable-next-line camelcase
    ({ _id }) => _id?.toString() === id
  );
  useEffect(() => {
    if (data) {
      dispatch(productDetail(data));
      if (recentProductExists) return;
      dispatch(recentProduct({ data, _id: id }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  React.useEffect(() => {
    fetch(`https://vnguyen.xyz/huy/day17/apis/index.php?type=product&id=${id}`)
      .then((res) => res.json())
      .then((productDetailData) => setData(productDetailData.data))
      .catch(() => console.log());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
};

export default useFetchProductDetail;
