import axios from 'axios';
import React from 'react';

const useFetchHome = () => {
  const [motions, setCategories] = React.useState([]);
  const [isSuccess, setIssuccess] = React.useState();

  React.useEffect(() => {
    axios
      .get('https://vnguyen.xyz/huy/day17/apis/index.php?type=home')
      .then((res) => {
        setCategories(res.data.data.testimonial);
        setIssuccess(true);
      })
      .catch(() => setIssuccess(false));
  }, []);

  return { motions, isSuccess };
};

export default useFetchHome;
