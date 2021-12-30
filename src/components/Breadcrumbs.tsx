import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { HomeIcon } from '../assets/icons';

const routes = [
  {
    key: 'home',
    label: 'Home',
  },
  {
    key: 'post-job',
    label: 'Post a job',
  },
];

const BreadCrumbs = () => {
  const { pathname } = useLocation();

  const currRoutes = useMemo(() => {
    return pathname.slice(1).split('/');
  }, [pathname]);

  let routeResolved = '';
  return (
    <div className="flex w-full max-w-4xl mx-auto mt-2">
      {currRoutes.map((route, idx) => {
        const currRoute = routes.find((val) => val.key === route);
        routeResolved = routeResolved.concat(`/${currRoute?.key}`);

        return (
          <div
            key={route}
            className="text-sm text-gray-300 hover:text-gray-400 transition-all flex items-center">
            {currRoute?.key === 'home' && <HomeIcon className="h-4 w-4 mr-1" />}
            <Link to={`${routeResolved}` || '/home'}>{currRoute?.label}</Link>
            {idx !== currRoutes.length - 1 && (
              <span className="inline-block mx-2"> &gt; </span>
            )}{' '}
          </div>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
