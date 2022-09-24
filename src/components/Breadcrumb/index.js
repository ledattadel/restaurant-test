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

    const address = constants?.breadcrumb?.find((v) => v.key === location.pathname);

    return (
        <div className="breadcrumb">
            <ul>
                <li onClick={routeToHome} className="breadcrumb__item">
                    <MenuIcon.HomeIcon color={'#F78B2D'} /> Home
                </li>
                <li onClick={routeToLink} className="breadcrumb__item">
                    {address.label === 'Trang chủ' ? '' : address.label}
                </li>
            </ul>
            <Menu address={address.key} button={address.button} />
        </div>
    );
};

export default Breadcrumber;
