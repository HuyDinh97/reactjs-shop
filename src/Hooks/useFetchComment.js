import React from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from 'store/actions/common';
import { useGetComments } from 'store/selectors/common';

const useFetchComment = (id) => {
  const comments = useGetComments();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const commentExists = comments.find(
      // eslint-disable-next-line camelcase
      ({ product_id }) => product_id?.toString() === id
    );
    if (commentExists) return;
    fetch(
      `https://vnguyen.xyz/huy/day17/apis/index.php?type=comments&product_id=${id}`
    )
      .then((res) => res.json())
      .then((comment) => dispatch(addComment(comment.data)))
      .catch(() => console.log());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
};

export default useFetchComment;
