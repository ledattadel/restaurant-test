import * as React from 'react';
import * as MenuIcon from '@/assets/menu-icon/';
import { useNavigate, useLocation } from 'react-router-dom';
import constants from '@/constants';
import Menu from './Menu';

const Breadcrumber = ({ title, setRouteBreadcumRender }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const routeToHome = () => {
        navigate('/');
        setRouteBreadcumRender('/');
    };

    const routeToLink = () => {
        navigate(location.pathname);
    };

    const findTitle = constants.breadcrumb.find((v) => v.key === location.pathname).label;
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
            <Menu />
        </div>
    );
};

export default Breadcrumber;
