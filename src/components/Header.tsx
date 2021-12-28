import React from 'react';

import NavBar from './NavBar';

type HeaderPropTypes = {
  children: React.ReactNode;
  className?: string;
  variant?: string;
};

const Header: React.FC<HeaderPropTypes> = ({ children, className }) => {
  return (
    <div className="linear-gradient-stuff w-full h-80 px-6 flex flex-col items-center text-white">
      <NavBar />
      <section className="w-full mx-auto max-w-4xl flex-1">{children}</section>
    </div>
  );
};

export default Header;
