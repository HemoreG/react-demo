import React from 'react';
const Home = React.lazy(() => import('./layouts/Home'));
const Theme = React.lazy(() => import('./layouts/Theme'));
const Page404 = React.lazy(() => import('./layouts/Page404'));


const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home/>
    },
    {
        path: '/theme',
        exact: true,
        main: () => <Theme/>
    },
    {
        path: '/*',
        main: (data) => <Page404 data={data} />
    }
];

export default routes;