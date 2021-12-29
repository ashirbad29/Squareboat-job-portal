// import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthState } from '../state/authSlice';

// TODO: FIX THE TYPE
const PrivateRoute = ({ children }: { children: any }) => {
  const auth = useAuthState();
  return auth.isLoggedIn ? children : <Navigate to="/" />;
};

export default PrivateRoute;
