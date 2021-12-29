import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ForgotPassword from './pages/AuthPages/ForgotPassword';
import LoginPage from './pages/AuthPages/LoginPage';
import ResetPassword from './pages/AuthPages/ResetPassword';
import SignupPage from './pages/AuthPages/SignupPage';
import JobPostPage from './pages/JobPostPage';
import LandingPage from './pages/Landing';

function App() {
  return (
    <BrowserRouter>
      <main className="font-helvetica">
        <Routes>
          <Route path="/" element={<LandingPage />} />
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
