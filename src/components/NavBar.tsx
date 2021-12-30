import clsx from 'clsx';
import { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation } from 'react-router-dom';

import { logout, useAuthState } from '../state/authSlice';
import { useAppDispatch } from '../state/hooks';
import { removeFromLocalStorage } from '../utils/localStorage';

const NavBar = () => {
  const location = useLocation();
  const auth = useAuthState();
  const dispatch = useAppDispatch();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const showLoginSignupBtn = useMemo(
    () => location.pathname !== '/login' && location.pathname !== '/signup',
    [location.pathname]
  );
  const isOnJobPostPage = location.pathname === '/post-job';

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logged out sucessful');
    removeFromLocalStorage('auth-user');
  };

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
            to="/home/post-job"
            className={clsx('text-sm text-light-sky', {
              'border-b-2 border-primary-sky': isOnJobPostPage,
            })}>
            Post a job
          </Link>
          <div className="relative">
            <div
              onClick={() => setDropdownVisible((s) => !s)}
              className="h-8 w-8 rounded-full bg-light-sky text-not-dark-blue text-sm flex items-center justify-center cursor-pointer">
              {auth.user?.name.charAt(0).toUpperCase() || 'X'}
            </div>
            {dropdownVisible && (
              <button
                onClick={handleLogout}
                className="absolute top-11 -left-3 bg-light-sky text-sm text-not-dark-blue px-2 py-1 rounded hover:bg-light-sky/80 transition-all">
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
