import { Navigate, useLocation } from 'react-router-dom';

import { useAuthState } from '../state/authSlice';
import { getFromLocalStorage } from '../utils/localStorage';

// TODO: FIX THE TYPE
const PrivateRoute = ({ children }: { children: any }) => {
  const location = useLocation();
  const auth = useAuthState();

  const localAuth = getFromLocalStorage('auth-user');

  return auth.isLoggedIn || localAuth?.token ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
};

export default PrivateRoute;
