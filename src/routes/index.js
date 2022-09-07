// import { HeaderOnly } from '@/components/Layout';

import Home from '@/pages/Home';
import Login from '@/pages/Auth/Login';
import Dish from '@/pages/Dish/';
import Menu from '@/pages/Menu';
import Register from '@/pages/Auth/Register';
import BlankPage from '@/pages/Blank';
import Order from '@/pages/Order';
import Table from '@/pages/TableManagement';
import DishManagement from '@/pages/DishManagement';

//P menu
import Area from '@/pages/Area';

// Public routes
const privateRoutes = [
    { path: '/', component: Home,  },
    { path: '/dashboard', component: Home },
    { path: '/menu', component: Menu },
    { path: '/dish', component: Dish },
    { path: '/order', component: Order },
    { path: '/area', component: Area },
    { path: '/table', component: Table },
    { path: '*', component: BlankPage },
];

const publicRoutes = [
    { path: '/', component: DishManagement},
    { path: '/login', component: Login, layout: null },
    { path: '/register', component: Register, layout: null },
    { path: '*', component: BlankPage },
];

export { publicRoutes, privateRoutes };
