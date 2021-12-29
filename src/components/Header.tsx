import cx from 'clsx';
import React from 'react';
import { useLocation } from 'react-router-dom';

import BreadCrumbs from './Breadcrumbs';
import NavBar from './NavBar';

type HeaderPropTypes = {
  children: React.ReactNode;
  className?: string;
  variant?: 'sm' | 'md' | 'lg';
};

const Header: React.FC<HeaderPropTypes> = ({
  children,
  className = '',
  variant = 'md',
}) => {
  const heightClassName = {
    sm: 'h-64',
    md: 'h-72',
    lg: 'h-80',
  }[variant];

  const location = useLocation();
  console.log(location);

  return (
    <div
      className={cx(
        'linear-gradient-stuff w-full px-6 flex flex-col items-center text-white',
        heightClassName
      )}>
      <NavBar />
      <BreadCrumbs />
      <section className={cx('w-full mx-auto max-w-4xl flex-1', className)}>
        {children}
      </section>
    </div>
  );
};

export default Header;
