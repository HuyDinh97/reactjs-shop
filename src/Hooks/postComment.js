/* eslint-disable no-undef */
import { postData } from 'components/LoginRegistration/LoginCheck';

const postComment = (fields) => {
  postData(
    'https://vnguyen.xyz/huy/day17/apis/index.php?type=comments&action=add',
    fields
  );
};

export default postComment;
