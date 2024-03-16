import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import PagesLayout from 'layout/Pages';
import { Layout } from 'layout';

// types
const MaintenanceError = Loadable(lazy(() => import('pages/errorBoundary/ErrorPage')));

// 메인 페이지
const Home = Loadable(lazy(() => import('pages/home/Home')));
const SignIn = Loadable(lazy(() => import('pages/auth/SignIn')));
const SignUp = Loadable(lazy(() => import('pages/auth/SignUp')));
const PlanPost = Loadable(lazy(() => import('pages/planPost/PlanPost')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  errorElement: <MaintenanceError />,
  element: <PagesLayout />,
  children: [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/signin',
          element: <SignIn />,
        },
        {
          path: '/signup',
          element: <SignUp />,
        },
        {
          path: '/plan-post',
          element: <PlanPost />,
        },
      ],
    },
  ],
};

export default MainRoutes;
