import React from 'react';

const Home = React.lazy(() => import('./layouts/Home'));
const Component = React.lazy(() => import('./layouts/Component'));
const Theme = React.lazy(() => import('./layouts/Theme'));
const ThemeClass = React.lazy(() => import('./layouts/ThemeClass'));
const LiveCounter = React.lazy(() => import('./layouts/LiveCounter'));
const Counter = React.lazy(() => import('./layouts/Counter'));
const Page404 = React.lazy(() => import('./layouts/Page404'));
const Redux = React.lazy(() => import('./layouts/Redux'));
const VirtualDOM = React.lazy(() => import('./layouts/VirtualDOM'));
const About = React.lazy(() => import('./layouts/About'));

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
        path: '/*',
        exact: false,
        main: (data) => <Page404 data={data}/>
    }
];

export default routes;