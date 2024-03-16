import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import PagesLayout from 'layout/Pages';
import { Layout } from 'layout';

// types
const MaintenanceError = Loadable(lazy(() => import('pages/errorBoundary/ErrorPage')));

// 메인 페이지
const Home = Loadable(lazy(() => import('pages/Home')));
const SignIn = Loadable(lazy(() => import('pages/SignIn')));
const SignUp = Loadable(lazy(() => import('pages/SignUp')));
const Post = Loadable(lazy(() => import('pages/Post')));

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
          path: '/post',
          element: <Post />,
        },
      ],
    },
  ],
};

export default MainRoutes;
