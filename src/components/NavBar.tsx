import clsx from 'clsx';
import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useAuthState } from '../state/authSlice';

const NavBar = () => {
  const location = useLocation();
  const auth = useAuthState();

  const showLoginSignupBtn = useMemo(
    () => location.pathname !== '/login' && location.pathname !== '/signup',
    [location.pathname]
  );

  const isOnJobPostPage = location.pathname === '/post-job';

  return (
    <nav className="w-full max-w-5xl py-3 mx-auto flex items-center justify-between border-b border-white/30">
      <Link to="/" className="font-semibold text-lg">
        My<span className="text-primary-sky">Jobs</span>
      </Link>
      {showLoginSignupBtn && !auth.isLoggedIn && (
        <Link
          to="/login"
          className="text-sm border border-primary-sky px-2 py-1 rounded bg-primary-sky/20 hover:bg-primary-sky/40 transition-all">
          Login/Signup
        </Link>
      )}

      {auth.isLoggedIn && (
        <div className="flex gap-8 items-center">
          <Link
            to="/post-job"
            className={clsx('text-sm text-light-sky', {
              'border-b-2 border-primary-sky': isOnJobPostPage,
            })}>
            Post a job
          </Link>
          <div>
            <div className="h-8 w-8 rounded-full bg-light-sky text-not-dark-blue text-sm flex items-center justify-center cursor-pointer">
              {auth.user?.name.charAt(0).toUpperCase() || 'X'}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
