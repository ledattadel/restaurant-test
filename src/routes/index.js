// import DishManagement from '@/pages/DishManagement';
import { Home, Login, Dish, Menu, Blank, Table } from '@/pages/index';

//P menus
import Area from '@/pages/Area';

// Public routes
const privateRoutes = [
    { path: '/', component: Home },
    { path: '/dashboard', component: Blank },
    { path: '/menu', component: Blank },
    { path: '/dish', component: Dish },
    { path: '/order', component: Blank },
    { path: '/area', component: Area },
    { path: '/area/table', component: Table },
    { path: '*', component: Blank },
];
const publicRoutes = [
    { path: '/', component: Login, layout: null },
    { path: '/login', component: Login, layout: null },
    { path: '/register', component: Blank, layout: null },
    { path: '*', component: Blank },
];

export { publicRoutes, privateRoutes };
