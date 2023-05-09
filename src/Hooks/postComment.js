/* eslint-disable no-undef */
/* eslint-disable camelcase */
import axios from 'axios';

const postComment = ({ product_id, comment, author, email }) => {
  const fields = {
    product_id: { required: product_id },
    comment: { required: comment },
    author: { required: author },
    email: { email },
  };
  axios
    .post(
      'https://vnguyen.xyz/huy/day17/apis/index.php?type=comments&action=add',
      { fields }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default postComment;
