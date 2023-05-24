import React from 'react';
import { useDispatch } from 'react-redux';
import { addHome } from 'store/actions/common';
import { useGetHome } from 'store/selectors/common';

const useFetchHome = () => {
  const dispatch = useDispatch();
  const homeData = useGetHome();

  React.useEffect(() => {
    if (homeData) {
      return;
    }
    fetch('https://vnguyen.xyz/huy/day17/apis/index.php?type=home')
      .then((res) => res.json())
      .then((home) => dispatch(addHome(home ?? {})))
      .catch(() => console.log());
  }, [homeData, dispatch]);

  return { homeData };
};

export default useFetchHome;
