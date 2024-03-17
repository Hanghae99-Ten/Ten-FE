import { createElement, lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import PagesLayout from 'layout/Pages';
import { Layout } from 'layout';
import { DefaultSeoHeader } from 'routes/seo/header';
import { MainRoutesConstants } from 'routes/MainRoutesConstants';

// types
const MaintenanceError = Loadable(lazy(() => import('pages/errorBoundary/ErrorPage')));

// ==============================|| MAIN ROUTING ||============================== //
const MainRoutes = {
  path: '/',
  errorElement: <MaintenanceError />,
  element: <PagesLayout />,
  children: [
    {
      element: <Layout />,
      children: Object.entries(MainRoutesConstants).map(([PATH, DATA]) => {
        let children;
        if (DATA.CHILDREN) {
          children = DATA.CHILDREN.map((child) => ({
            path: child.PATH,
            element: createElement(child.ELEMENT),
          }));
        }
        return {
          path: PATH,
          element: (
            <>
              {createElement(DATA.COMPONENT)}
              {createElement(DATA.SEO_HEADER ?? DefaultSeoHeader)}
            </>
          ),
          children,
        };
      }),
    },
  ],
};

export default MainRoutes;
