/* eslint-disable no-alert */

import { postData } from './LoginCheck';

const doSignUp = async ({
  nameSignUpRef,
  emailSignUpRef,
  passwordSignUpRef,
  passwordComfirmSignUpRef,
  acceptSignUp,
}) => {
  const nameSignUp = nameSignUpRef.current.value;
  const emailSignUp = emailSignUpRef.current.value;
  const passwordSignUp = passwordSignUpRef.current.value;
  const passwordComfirmSignUp = passwordComfirmSignUpRef.current.value;
  const acceptSignUpCheck = acceptSignUp.checked ? 1 : 0;

  const signUp = await postData(
    'https://vnguyen.xyz/huy/day17/apis/index.php?type=register',
    {
      name: nameSignUp,
      email: emailSignUp,
      password: passwordSignUp,
      confirm_password: passwordComfirmSignUp,
      agree: acceptSignUpCheck,
    }
  );
  const error = JSON.parse(signUp?.errors);
  const status = signUp?.message;
  // if (signUp?.status) {
  //   return false;
  // }
  // if (passwordSignUp !== passwordComfirmSignUp) {
  //   alert(signUp?.status.errors);
  // }
  // if (acceptSignUpCheck === 0) {
  //   alert('You must accept the terms and conditions');
  // }
  return { status, error };
};

export default doSignUp;
