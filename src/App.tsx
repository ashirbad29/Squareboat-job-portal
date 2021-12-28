import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from './pages/AuthPages/LoginPage';
import LandingPage from './pages/Landing';

function App() {
  return (
    <BrowserRouter>
      <main className="font-helvetica">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
