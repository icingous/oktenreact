import { useEffect } from 'react';
import { login } from '../services/auth.service';

const LoginPage = () => {
  useEffect(() => {
    login({
      username: 'emilys',
      password: 'emilyspass',
      expiresInMins: 1,
    }).then((res) => {
      console.log(res);
    });
  }, []);

  return <div>LoginPage</div>;
};

export default LoginPage;
