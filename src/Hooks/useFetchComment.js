import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from 'store/actions/common';
import { useGetComments } from 'store/selectors/common';

const useFetchComment = (id) => {
  const [isSuccess, setIssuccess] = React.useState();
  const comments = useGetComments();
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios
      .get(
        `https://vnguyen.xyz/huy/day17/apis/index.php?type=comments&product_id=${id}`
      )
      .then((res) => {
        dispatch(addComment(res.data.data));
        setIssuccess(true);
      })
      .catch(() => setIssuccess(false));
  }, [dispatch, id]);

  return { comments, isSuccess };
};

export default useFetchComment;
