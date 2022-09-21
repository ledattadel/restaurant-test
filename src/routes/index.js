// import DishManagement from '@/pages/DishManagement';

import { Home, Login, Dish, Blank, Table } from '@/pages/index';
import CustomerManagement from '@/pages/Customer';

//P menus
import Area from '@/pages/Area';

// Public routes
const privateRoutes = [
    { path: '/', component: Home },
    { path: '/dashboard', component: Blank },
    { path: '/menu', component: Blank },
    { path: '/dish', component: Dish },
    { path: '/order', component: Area },
    { path: '/area', component: Area },
    { path: '/area/table', component: Table },
    { path: '/customer', component: CustomerManagement },
    { path: '*', component: Blank },
];
const publicRoutes = [
    { path: '/', component: Login, layout: null },
    { path: '/login', component: Login, layout: null },
    { path: '/register', component: Blank, layout: null },
    { path: '*', component: Blank },
];

export { publicRoutes, privateRoutes };
