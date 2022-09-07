import { HeaderOnly } from '@/components/Layout';

import Home from '@/pages/Home';
import Login from '@/pages/Auth/Login';
import BlankPage from '@/pages/Blank';

//P menu

// Public routes
const privateRoutes = [
    { path: '/', component: Home },
    { path: '/dashboard', component: Home },
    { path: '*', component: BlankPage },
];

const publicRoutes = [
    { path: '/', component: Login, layout: null },
    { path: '/login', component: Login, layout: null },
    { path: '*', component: BlankPage },
];

export { publicRoutes, privateRoutes };
