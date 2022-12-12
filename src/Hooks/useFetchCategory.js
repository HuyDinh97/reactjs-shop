import axios from 'axios';
import React from 'react';

const useFetchCategory = () => {
  const [categories, setCategories] = React.useState();
  const [isSuccess, setIssuccess] = React.useState();

  React.useEffect(() => {
    axios
      .get('https://vnguyen.xyz/huy/day17/apis/index.php?type=categories')
      .then((res) => {
        setCategories(res.data.data);
        setIssuccess(true);
      })
      .catch(() => setIssuccess(false));
  }, []);

  return { categories, isSuccess };
};

export default useFetchCategory;
