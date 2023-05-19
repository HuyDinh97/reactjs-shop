import { useGetLogInData } from 'store/selectors/common';
import { useDispatch } from 'react-redux';
import { logInDataReturn } from 'store/actions/common';
import { postData } from './LoginCheck';

const DoLogIn = async () => {
  const dataLogin = useGetLogInData();
  const { email, password } = useGetLogInData();
  const dispatch = useDispatch();
  if (dataLogin.length <= 0) return;

  const login = await postData(
    'https://vnguyen.xyz/huy/day17/apis/index.php?type=login',
    {
      email,
      password,
    }
  );
  const data = login.errors;
  const error = data ? JSON.parse(data) : null;

  dispatch(logInDataReturn(login.status));
};

export default DoLogIn;
