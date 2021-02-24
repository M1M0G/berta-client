import { LoadingOutlined } from '@ant-design/icons';
import React, { Suspense, lazy } from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import RouteWithSubRoutes from './RouteWithSubRoutes';



const Home = lazy(() => import('./components/pages/Home'));
const About = lazy(() => import('./components/pages/About'));
const SignIn = lazy(() => import('./components/pages/SignIn'))
const SignUp = lazy(() => import('./components/pages/SignUp'))

const routes = [
  {
    path: '/signin',
    component: SignIn,
  },
  {
    path: '/signup',
    component: SignUp,
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  }
];

const AppRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<div className="lazy-loading">Загрузка <LoadingOutlined/></div>}>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Suspense>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;