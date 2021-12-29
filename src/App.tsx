import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import useAuth from './hooks/useAuth';
import ForgotPassword from './pages/AuthPages/ForgotPassword';
import LoginPage from './pages/AuthPages/LoginPage';
import ResetPassword from './pages/AuthPages/ResetPassword';
import SignupPage from './pages/AuthPages/SignupPage';
import HomePage from './pages/HomePage';
import JobPostPage from './pages/JobPostPage';
import LandingPage from './pages/Landing';

function App() {
  useAuth();

  return (
    <BrowserRouter>
      <main className="font-helvetica">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/home/post-job"
            element={
              <PrivateRoute>
                <JobPostPage />
              </PrivateRoute>
            }
          />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Routes>
        <Toaster position="top-right" />
      </main>
    </BrowserRouter>
  );
}

export default App;
