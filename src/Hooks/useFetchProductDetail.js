import React from 'react';
import { useDispatch } from 'react-redux';
import { productDetail } from 'store/actions/common';

import { useGetProductDetail } from 'store/selectors/common';

const useFetchProductDetail = (id) => {
  const comments = useGetProductDetail();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const commentExists = comments.find(
      // eslint-disable-next-line camelcase
      ({ product_id }) => product_id?.toString() === id
    );
    if (commentExists) return;
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
