import { useGetLogInData } from 'store/selectors/common';
import { useDispatch } from 'react-redux';
import { logInDataReturn } from 'store/actions/common';
import { useNavigate } from 'react-router-dom';
import { postData } from './LoginCheck';

const DoLogIn = async () => {
  const dataLogin = useGetLogInData();
  const { email, password } = useGetLogInData();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (dataLogin.length <= 0) return;

  const login = await postData(
    'https://vnguyen.xyz/huy/day17/apis/index.php?type=login',
    {
      email,
      password,
    }
  );

  dispatch(logInDataReturn({ status: login.status }));
  if (login.status === true) {
    navigate('/');
    // eslint-disable-next-line no-alert
    window.alert(login.message);
  }
};

export default DoLogIn;
