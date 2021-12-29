import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
  console.log(location);

  const currRoutes = useMemo(() => {
    return pathname.slice(1).split('/');
  }, [pathname]);

  let routeResolved = '';
  return (
    <div className="flex w-full max-w-3xl mx-auto mt-2">
      {currRoutes.map((route, idx) => {
        const currRoute = routes.find((val) => val.key === route);
        routeResolved = routeResolved.concat(`/${currRoute?.key}`);

        return (
          <div key={currRoute?.key} className="text-sm text-gray-300">
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