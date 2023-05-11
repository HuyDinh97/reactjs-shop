/* eslint-disable no-undef */
import axios from 'axios';

const postComment = (fields) => {
  axios
    .request({
      method: 'post',
      url: 'https://vnguyen.xyz/huy/day17/apis/index.php?type=comments&action=add',
      data: fields,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    // .then((response) => {
    //   console.log('data', response);
    // })
    .catch((error) => {
      console.log(error.data);
    });
};

export default postComment;
