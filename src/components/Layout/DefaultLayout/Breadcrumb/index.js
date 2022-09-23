import * as React from 'react';
import * as MenuIcon from '@/assets/menu-icon/';
import { useNavigate, useLocation, matchRoutes } from 'react-router-dom';
import { Button, Dropdown, Menu } from 'antd';
import { BsPlusCircle, BsSortDown } from 'react-icons/bs';
import { FormAddDish } from '@/components';
import { useEffect } from 'react';
import constants from '@/constants';

const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        1st menu item
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        2nd menu item
                    </a>
                ),
            },
            {
                key: '3',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        3rd menu item
                    </a>
                ),
            },
        ]}
    />
);

const items2 = [
    {
        path: '/',
        label: 'Trang chủ',
    },
    {
        path: '/dish',
        label: 'Quản lý món ăn',
    },
    {
        path: '/table',
        label: 'Quản lý bàn ăn',
    },
    {
        path: '/discount',
        label: 'Khuyến mãi',
    },
    {
        path: '/account',
        label: 'Quản lý nhân viên',
    },
    {
        path: '/customer',
        label: 'Quản lý khách hàng',
    },
    {
        path: '/table-area/:id',
        label: 'Quản lý bàn',
    },
];
const RenderBtnBreadcrumb = ({ titleCreate, onClick, titleFilter }) => {
    return (
        <div className="breadcrumb__menu">
            <Button className="breadcrumb__menu__btn breadcrumb__menu__btn-add" onClick={onClick}>
                <BsPlusCircle />
                <p>{titleCreate}</p>
            </Button>
            {titleFilter && (
                <Dropdown overlay={menu} placement="bottom">
                    <Button className="breadcrumb__menu__btn breadcrumb__menu__btn-sort">
                        <BsSortDown />
                        <p>{titleFilter}</p>
                    </Button>
                </Dropdown>
            )}
        </div>
    );
};
const Breadcrumber = ({ title, setRouteBreadcumRender }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [trigger, setTrigger] = React.useState(false);
    const [findTitle, setFindTitle] = React.useState('');
    const [{ route }] = matchRoutes(constants.breadcrumb, location);
    useEffect(() => {
        setFindTitle(constants?.breadcrumb?.find((v) => v.path === route.path).label);
    }, [findTitle]);

    const routeToHome = () => {
        navigate('/');
        setRouteBreadcumRender('/');
    };
    const routeToLink = () => {
        navigate(location.pathname);
    };

    return (
        <div className="breadcrumb">
            <ul>
                <li onClick={routeToHome} className="breadcrumb__item">
                    <MenuIcon.HomeIcon color={'#F78B2D'} /> Home
                </li>
                <li onClick={routeToLink} className="breadcrumb__item">
                    {findTitle === 'Trang chủ' ? '' : findTitle}
                </li>
            </ul>
            {route.path === '/dish' && (
                <RenderBtnBreadcrumb
                    titleCreate={'Tạo món'}
                    onClick={() => setTrigger(true)}
                    titleFilter={'Lọc theo'}
                />
            )}

            {route.path === '/category' && (
                <RenderBtnBreadcrumb titleCreate={'Thêm danh mục'} onClick={() => setTrigger(true)} />
            )}


            {route.path === '/customer' && (
                <RenderBtnBreadcrumb titleCreate={'Tạo Khách hàng'} onClick={() => setTrigger(true)} />
            )}

            <FormAddDish trigger={trigger} handleTrigger={() => setTrigger(false)} />
        </div>
    );
};

export default Breadcrumber;
