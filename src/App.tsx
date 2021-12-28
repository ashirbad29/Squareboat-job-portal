import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from './pages/AuthPages/LoginPage';
import SignupPage from './pages/AuthPages/SignupPage';
import LandingPage from './pages/Landing';

function App() {
  return (
    <BrowserRouter>
      <main className="font-helvetica">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
