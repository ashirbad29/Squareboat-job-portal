import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { login } from '../src/state/authSlice';
import ForgotPassword from './pages/AuthPages/ForgotPassword';
import LoginPage from './pages/AuthPages/LoginPage';
import ResetPassword from './pages/AuthPages/ResetPassword';
import SignupPage from './pages/AuthPages/SignupPage';
import HomePage from './pages/HomePage';
import JobPostPage from './pages/JobPostPage';
import LandingPage from './pages/Landing';
import { useAppDispatch } from './state/hooks';
import { getFromLocalStorage } from './utils/localStorage';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const localAuthData = getFromLocalStorage('auth-user');
    if (localAuthData?.token) {
      const { token, ...user } = localAuthData;
      dispatch(login({ user, authorization: token }));
    }
  }, []);

  return (
    <BrowserRouter>
      <main className="font-helvetica">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="post-job" element={<JobPostPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
