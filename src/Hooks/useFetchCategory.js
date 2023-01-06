import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useGetCategories } from 'store/selectors/common';
import { addCategories } from '../store/actions/common';

const useFetchCategory = () => {
  const [isSuccess, setIssuccess] = React.useState();
  const dispatch = useDispatch();
  const categories = useGetCategories();

  React.useEffect(() => {
    if (categories?.length > 0) {
      setIssuccess(true);
      return;
    }
    axios
      .get('https://vnguyen.xyz/huy/day17/apis/index.php?type=categories')
      .then((res) => {
        dispatch(addCategories({ categories: res.data.data }));
        setIssuccess(true);
      })
      .catch(() => setIssuccess(false));
  }, [categories?.length, dispatch]);

  return { categories, isSuccess };
};

export default useFetchCategory;
