import * as MenuIcon from '@/assets/menu-icon/';
import * as React from 'react';

const constants = {
    sidebar: [
        {
            key: '/',
            icon: <MenuIcon.HomeIcon color={'white'} />,
            label: 'Trang chủ',
        },
        {
            key: '/dish',
            icon: <MenuIcon.DishIcon />,
            label: 'Quản lý món ăn',
        },
        {
            key: '/table',
            icon: <MenuIcon.TableIcon />,
            label: 'Quản lý bàn ăn',
        },
        {
            key: '/discount',
            icon: <MenuIcon.DiscountIcon />,
            label: 'Khuyến mãi',
        },
        {
            key: '/account',
            icon: <MenuIcon.AccountIcon />,
            label: 'Quản lý nhân viên',
        },
        {
            key: '/customer',
            icon: <MenuIcon.AccountIcon />,
            label: 'Quản lý Khách hàng',
        },
    ],

    breadcrumb: [
        {
            path: "/",
            label: "Trang chủ",
        },
        {
            path: "/dish",
            label: "Quản lý món ăn",
        },
        {
            path: "/table",
            label: "Quản lý bàn ăn",
        },
        {
            path: "/discount",
            label: "Khuyến mãi",
        },
        {
            path: "/account",
            label: "Quản lý nhân viên",
        },
        {
            path: "/customer",
            label: "Quản lý khách hàng",
        },
        {
            path: "/table-area/:id",
            label: "Quản lý bàn",
        },
    ],

    modal: [
        {
            key: '/dish',
            label: 'FormAddDish',
        },
    ],
};

export default constants;
