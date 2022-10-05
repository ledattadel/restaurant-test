import { Account, Area, Blank, Category, Customer, Dish, Home, Invoice, Login, Promotion, Table } from '@/pages/index';

// Public routes
const privateRoutes = [
    { path: '/', component: Home },
    { path: '/dashboard', component: Blank },
    { path: '/menu', component: Blank },
    { path: '/category', component: Category },
    { path: '/dish', component: Dish },
    { path: '/order', component: Area },
    { path: '/area', component: Area },
    { path: '/area', component: Area },
    { path: '/area/table', component: Table },
    { path: '/account', component: Account },
    { path: '/customer', component: Customer },
    { path: '/invoice', component: Invoice },
    { path: '/promotion', component: Promotion },
    { path: '*', component: Blank },
];
const publicRoutes = [
    { path: '/', component: Login, layout: null },
    { path: '/login', component: Login, layout: null },
    { path: '/register', component: Blank, layout: null },
    { path: '*', component: Blank },
];

export { publicRoutes, privateRoutes };
