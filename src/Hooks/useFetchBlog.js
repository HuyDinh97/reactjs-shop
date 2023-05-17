import axios from 'axios';
import React from 'react';

const useFetchBlog = () => {
  const [blogs, setBlogs] = React.useState();
  const [isSuccess, setIssuccess] = React.useState();

  React.useEffect(() => {
    fetch('https://vnguyen.xyz/huy/day17/apis/index.php?type=posts')
      .then((res) => res.json())
      .then((data) => setBlogs(data.data))
      .catch(() => setIssuccess(false));
  }, []);

  return { blogs, isSuccess };
};

export default useFetchBlog;
