import { useEffect } from 'react';

import { login } from '../state/authSlice';
import { useAppDispatch } from '../state/hooks';
import { getFromLocalStorage } from '../utils/localStorage';

const useAuth = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const localAuthData = getFromLocalStorage('auth-user');
    if (localAuthData?.token) {
      const { token, ...user } = localAuthData;
      dispatch(login({ user, authorization: token }));
    }
  }, []);
};

export default useAuth;
