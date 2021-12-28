import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="w-full max-w-5xl py-3 mx-auto flex items-center justify-between border-b border-white/30">
      <Link to="/" className="font-semibold text-lg">
        My<span className="text-primary-sky">Jobs</span>
      </Link>
      <Link
        to="/login"
        className="text-sm border border-primary-sky px-2 py-1 rounded bg-primary-sky/20 hover:bg-primary-sky/40 transition-all">
        Login/Signup
      </Link>
    </nav>
  );
};

export default NavBar;
