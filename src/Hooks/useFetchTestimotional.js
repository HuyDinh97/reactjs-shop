import axios from 'axios';
import React from 'react';

const useFetchTestimotional = () => {
  const [testimotional, setTestimotional] = React.useState([]);
  const [isSuccess, setIssuccess] = React.useState();

  React.useEffect(() => {
    axios
      .get('https://vnguyen.xyz/huy/day17/apis/index.php?type=home')
      .then((res) => {
        setTestimotional(res.data.data.testimonial);
        setIssuccess(true);
      })
      .catch(() => setIssuccess(false));
  }, []);

  return { testimotional, isSuccess };
};

export default useFetchTestimotional;
