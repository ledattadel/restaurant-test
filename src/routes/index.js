import { Area, Blank, Category, Dish, Home, Login, Table } from '@/pages/index';

// Public routes
const privateRoutes = [
    { path: '/', component: Home },
    { path: '/dashboard', component: Blank },
    { path: '/menu', component: Blank },
    { path: '/category', component: Category },
    { path: '/dish', component: Dish },
    { path: '/order', component: Area },
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
