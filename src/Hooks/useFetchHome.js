import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addHome } from 'store/actions/common';
import { useGetHome } from 'store/selectors/common';

const useFetchHome = () => {
  const [isSuccess, setIssuccess] = React.useState();
  const dispatch = useDispatch();
  const homeData = useGetHome();

  React.useEffect(() => {
    if (homeData) {
      setIssuccess(true);
      return;
    }

    axios
      .get('https://vnguyen.xyz/huy/day17/apis/index.php?type=home')
      .then((res) => {
        dispatch(addHome(res?.data ?? {}));
        setIssuccess(true);
      })
      .catch(() => setIssuccess(false));
  }, [homeData, dispatch]);

  return { homeData, isSuccess };
};

export default useFetchHome;
