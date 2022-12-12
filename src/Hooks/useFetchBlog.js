import axios from 'axios';
import React from 'react';

const useFetchBlog = () => {
  const [blogs, setBlogs] = React.useState();
  const [isSuccess, setIssuccess] = React.useState();

  React.useEffect(() => {
    axios
      .get('https://vnguyen.xyz/huy/day17/apis/index.php')
      .then((res) => {
        setBlogs(res.data.data);
        setIssuccess(true);
      })
      .catch(() => setIssuccess(false));
  }, []);

  return { blogs, isSuccess };
};

export default useFetchBlog;
