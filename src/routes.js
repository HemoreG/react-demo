import React from 'react';

const Home = React.lazy(() => import('./pages/Commons/Home'));
const Component = React.lazy(() => import('./pages/Operations/Component'));
const Theme = React.lazy(() => import('./pages/Theme/Theme'));
const ThemeClass = React.lazy(() => import('./pages/Theme/ThemeClass'));
const LiveCounter = React.lazy(() => import('./pages/Counter/LiveCounter'));
const Counter = React.lazy(() => import('./pages/Counter/Counter'));
const Page404 = React.lazy(() => import('./pages/Commons/Page404'));
const Redux = React.lazy(() => import('./pages/Operations/Redux'));
const VirtualDOM = React.lazy(() => import('./pages/Operations/VirtualDOM'));
const About = React.lazy(() => import('./pages/Commons/About'));
const Login = React.lazy(() => import('./pages/User/Login'));
const Register = React.lazy(() => import('./pages/User/Register'));
const ResetPassword = React.lazy(() => import('./pages/User/ResetPassword'));
const ChangePassword = React.lazy(() => import('./pages/User/ChangePassword'));
const Account = React.lazy(() => import('./pages/User/Account'));
const Administration = React.lazy(() => import('./pages/User/Administration'));

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home/>
    },
    {
        path: '/component',
        exact: false,
        main: () => <Component/>
    },
    {
        path: '/redux',
        exact: false,
        main: () => <Redux/>
    },
    {
        path: '/virtual-dom',
        exact: false,
        main: () => <VirtualDOM/>
    },
    {
        path: '/theme',
        exact: false,
        main: () => <Theme/>
    },
    {
        path: '/theme-class',
        exact: false,
        main: () => <ThemeClass/>
    },
    {
        path: '/counter',
        exact: false,
        main: () => <Counter/>
    },
    {
        path: '/live-counter',
        exact: false,
        main: () => <LiveCounter/>
    },
    {
        path: '/about',
        exact: false,
        main: () => <About/>
    },
    {
        path: '/login',
        exact: false,
        main: () => <Login/>
    },
    {
        path: '/register',
        exact: false,
        main: () => <Register/>
    },
    {
        path: '/resetPassword',
        exact: false,
        main: () => <ResetPassword/>
    },
    {
        path: '/changePassword',
        exact: false,
        main: () => <ChangePassword/>
    },
    {
        path: '/account',
        exact: false,
        main: () => <Account/>
    },
    {
        path: '/administration',
        exact: false,
        main: () => <Administration/>
    },
    {
        path: '/*',
        exact: false,
        main: (data) => <Page404 data={data}/>
    }
];

export default routes;