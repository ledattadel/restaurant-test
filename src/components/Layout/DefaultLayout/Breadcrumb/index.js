import * as React from 'react';
import * as MenuIcon from '@/assets/menu-icon/';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Dropdown, Menu } from 'antd';
import { BsPlusCircle, BsSortDown } from 'react-icons/bs';
import AddDish from '@/components/Modal/AddDish';

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
];

const Breadcrumber = ({ title, setRouteBreadcumRender }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [trigger, setTrigger] = React.useState(false);

    const routeToHome = () => {
        navigate('/');
        setRouteBreadcumRender('/');
    };
    const routeToLink = () => {
        navigate(location.pathname);
    };

    const findTitle = items2.find((v) => v.key === location.pathname).label;
    console.log(trigger)
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
            <div className="breadcrumb__menu">
                <Button className= "breadcrumb__menu__btn breadcrumb__menu__btn-add" onClick={()=>setTrigger(true)}>
                    <BsPlusCircle />
                    <p>Tạo món mới</p>
                </Button>
                <Dropdown overlay={menu} placement="bottom">
                    <Button className="breadcrumb__menu__btn breadcrumb__menu__btn-sort" >
                        <BsSortDown />
                        <p>Lọc theo</p>
                    </Button>
                </Dropdown>
            </div>
            <AddDish trigger={trigger} handleTrigger={()=>setTrigger(false)}/>
        </div>
    );
};

export default Breadcrumber;
