// import { HeaderOnly } from '@/components/Layout';

import Home from '@/pages/Home';
import Login from '@/pages/Auth/Login';
import Dish from '@/pages/Dish/';
import Menu from '@/pages/Menu';
import Register from '@/pages/Auth/Register';
import BlankPage from '@/pages/Blank';
import Order from '@/pages/Order';
import Table from '@/pages/TableManagement';
// import DishManagement from '@/pages/DishManagement';

//P menu
import Area from '@/pages/Area';

// Public routes
const privateRoutes = [
    { path: '/', component: BlankPage },
    { path: '/dashboard', component: BlankPage },
    { path: '/menu', component: BlankPage },
    { path: '/dish', component: Dish },
    { path: '/order', component: BlankPage },
    { path: '/area', component: BlankPage },
    { path: '/table', component: BlankPage },
    { path: '*', component: BlankPage },
];

const publicRoutes = [
    { path: '/', component: Login, layout: null },
    { path: '/login', component: Login, layout: null },
    { path: '/register', component: Register, layout: null },
    { path: '*', component: BlankPage },
];

export { publicRoutes, privateRoutes };
