import { lazy } from 'react';
import Loadable from 'components/Loadable';
import { HomeHeader, SignInHeader, SignUpHeader, PlanPostHeader } from 'routes/seo/header';

const Home = Loadable(lazy(() => import('pages/home/Home')));
const SignIn = Loadable(lazy(() => import('pages/auth/SignIn')));
const SignUp = Loadable(lazy(() => import('pages/auth/SignUp')));
const PlanPost = Loadable(lazy(() => import('pages/planPost/PlanPost')));

export enum RouteEnum {
  HOME = '/',
  SIGNIN = '/signin',
  SIGNUP = '/signup',
  PLANPOST = '/plan-post',
}

export interface IRouteConfig {
  COMPONENT: (props: any) => JSX.Element;
  SEO_HEADER?: () => JSX.Element;
  TITLE: string;
  NAV?: boolean;
  ROUTE?: boolean;
  CHILDREN?: IChildrenElements[];
}

interface IChildrenElements {
  PATH: string;
  ELEMENT: (props: any) => JSX.Element;
}

type RouteMap = Record<string, Readonly<IRouteConfig>>;

export const MainRoutesConstants: RouteMap = Object.freeze({
  [RouteEnum.HOME]: {
    COMPONENT: Home,
    SEO_HEADER: HomeHeader,
    TITLE: '홈',
    NAV: true,
    ROUTE: true,
  },
  [RouteEnum.SIGNIN]: {
    COMPONENT: SignIn,
    SEO_HEADER: SignInHeader,
    TITLE: '로그인',
    ROUTE: true,
  },
  [RouteEnum.SIGNUP]: {
    COMPONENT: SignUp,
    SEO_HEADER: SignUpHeader,
    TITLE: '회원가입',
    ROUTE: true,
  },
  [RouteEnum.PLANPOST]: {
    COMPONENT: PlanPost,
    SEO_HEADER: PlanPostHeader,
    TITLE: '여행계획',
    ROUTE: true,
  },
});

export const ROUTER_LIST = Object.entries(MainRoutesConstants);
