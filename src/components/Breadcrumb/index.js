import * as React from 'react';
import * as MenuIcon from '@/assets/menu-icon/';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import constants from '@/constants';
import Menu from './Menu';
const breadcrumb = [
    {
        key: 1,
        link: '',
        label: 'Trang chủ',
        button: '',
        table: '',
    },
    { key: 2, link: 'category', label: 'Quản lý danh mục', button: 'Thêm danh mục', table: '' },
    { key: 3, link: 'dish', label: 'Quản lý món ăn', button: 'Tạo món mới', table: '' },
    { key: 4, link: 'area', label: 'Quản lý khu vực bàn', button: 'Tạo khu vực', table: '' },
    { key: 5, link: 'table', label: 'Chi tiết bàn', button: 'Tạo bàn', table: '' },
    { key: 6, link: 'account', label: 'Quản lý nhân viên', button: 'Thêm nhân viên', table: 'Danh sách nhân viên' },
    { key: 7, link: 'customer', label: 'Quản lý khách hàng', button: 'Thêm khách hàng', table: 'Danh sách khách hàng' },
    { key: 8, link: 'promotion', label: 'Khuyến mãi', button: 'Thêm khuyến mãi', table: 'Danh sách khuyến mãi' },
    { key: 9, link: 'invoice', label: 'Hóa đơn', button: '', table: 'Danh sách hóa đơn' },
];

const Breadcrumber = () => {
    // const navigate = useNavigate();
    const location = useLocation();
    const [locationString, setLocationString] = React.useState(null);
    const [locationComponent, setLocationComponent] = React.useState(<></>);
    const [breadcrumbString, setBreadcrumbString] = React.useState([]);
    const [address, setAddress] = React.useState(null);
    const [btnName, setBtnName] = React.useState(null);

    React.useEffect(() => {
        if (location.pathname !== locationString) {
            changeBreadcumb();
        }
    }, [location.pathname]);

    // const routeToHome = () => {
    //     navigate('/');
    //     setRouteBreadcumRender('/');
    // };

    // const routeToLink = () => {
    //     navigate(location.pathname);
    // };
    function isPositiveInteger(x) {
        return /^\+?\d+$/.test(x);
    }
    const changeBreadcumb = () => {
        let arrRouter;

        arrRouter = location.pathname.split('/');
        console.log(arrRouter);
        let arr = '';
        let arrComponent = [];
        arrComponent.push(
            <li
                style={{
                    color: '#F78B2D',
                }}
                className="breadcrumb__item"
            >
                <Link
                    to={`/`}
                    style={{
                        color: '#F78B2D',
                    }}
                    className="nav-link"
                >
                    {' '}
                    <MenuIcon.HomeIcon color={'#F78B2D'} />
                    Trang chủ
                </Link>
            </li>,
        );
        // console.log(arrComponent);
        loop1: for (let i = 1; i < arrRouter.length; i++) {
            // console.log(, 'check');
            let check = false;
            for (let j = 0; j < breadcrumb.length; j++) {
                if (isPositiveInteger(arrRouter[i + 1]) && arrRouter[i] === breadcrumb[j].link) {
                    arrComponent.push(
                        <li
                            style={{
                                color: '#0B0B0B',
                            }}
                            className="breadcrumb__item"
                        >
                            {breadcrumb[j].label}
                        </li>,
                    );

                    check = true;
                } else if (i === arrRouter.length - 1 && arrRouter[i] === breadcrumb[j].link) {
                    arrComponent.push(
                        <li
                            style={{
                                color: '#0B0B0B',
                            }}
                            className="breadcrumb__item"
                        >
                            {breadcrumb[j].label}
                        </li>,
                    );
                    setAddress(breadcrumb[j].link);
                    setBtnName(breadcrumb[j].button);
                    break loop1;
                } else if (arrRouter[i] === breadcrumb[j].link && !check) {
                    arr = arr + breadcrumb[j].label + '/';
                    arrComponent.push(
                        <li
                            style={{
                                color: '#F78B2D',
                            }}
                            className="breadcrumb__item"
                        >
                            {/* {breadcrumb[j].label} */}
                            <Link
                                to={`/${breadcrumb[j].link}`}
                                style={{
                                    color: '#F78B2D',
                                }}
                                className="nav-link"
                            >
                                {' '}
                                {breadcrumb[j].label}
                            </Link>
                        </li>,
                    );
                }
            }
        }
        setLocationComponent(arrComponent);

        // console.log(arr);
        // setLocationString(arr);
        // setLocationComponent(arrComponent);
    };

    // let address;
    // if (location.pathname.includes('/area/table')) {
    //     address.label = 'Khu vực bàn';
    // } else {
    //     address = constants?.breadcrumb?.find((v) => v.key === location.pathname);
    // }

    return (
        <div className="breadcrumb">
            <ul>
                {/* <li onClick={routeToHome} className="breadcrumb__item">
                    <MenuIcon.HomeIcon color={'#F78B2D'} /> Trang chủ
                </li>
                <li onClick={routeToLink} className="breadcrumb__item">
                    {locationString}
                </li> */}
                {locationComponent}
            </ul>

            <Menu address={address} button={btnName} />
        </div>
    );
};

export default Breadcrumber;
