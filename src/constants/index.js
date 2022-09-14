import * as MenuIcon from '@/assets/menu-icon/';

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
    ],

    breadcrumb: [
        {
            key: '/',
            label: 'Trang chủ',
        },
        {
            key: '/dish',
            label: 'Quản lý món ăn',
        },
        {
            key: '/table',
            label: 'Quản lý bàn ăn',
        },
        {
            key: '/discount',
            label: 'Khuyến mãi',
        },
        {
            key: '/account',
            label: 'Quản lý nhân viên',
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
