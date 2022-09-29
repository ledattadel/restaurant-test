import * as React from 'react';
import { Form, Modal } from 'antd';
import { useLocation } from 'react-router-dom';
import {
    FormAddAccount,
    FormAddArea,
    FormAddCategory,
    FormAddCustomer,
    FormAddDish,
    FormAddPromotion,
    FormAddTable,
} from '@/components';
import constants from '@/constants';

const breadcrumb = [
    {
        key: 1,
        link: '/',
        label: 'Trang chủ',
        button: '',
        table: '',
    },
    { key: 2, link: '/category', label: 'Quản lý danh mục', button: 'Thêm danh mục', table: '' },
    { key: 3, link: '/dish', label: 'Quản lý món ăn', button: 'Tạo món mới', table: '' },
    { key: 4, link: '/area', label: 'Quản lý khu vực bàn', button: 'Tạo khu vực', table: '' },
    { key: 5, link: '/table', label: 'Chi tiết bàn', button: 'Tạo bàn', table: '' },
    { key: 6, link: '/account', label: 'Quản lý nhân viên', button: 'Thêm nhân viên', table: 'Danh sách nhân viên' },
    {
        key: 7,
        link: '/customer',
        label: 'Quản lý khách hàng',
        button: 'Thêm khách hàng',
        table: 'Danh sách khách hàng',
    },
    { key: 8, link: '/promotion', label: 'Khuyến mãi', button: 'Thêm khuyến mãi', table: 'Danh sách khuyến mãi' },
    { key: 9, link: '/invoice', label: 'Hóa đơn', button: '', table: 'Danh sách hóa đơn' },
];

const DefaultModal = ({ visible, setVisible }) => {
    const [locationString, setLocationString] = React.useState(null);
    const [numberArea, setNumberArea] = React.useState(null);
    const location = useLocation();

    // const addDishRef = React.useRef(null);
    // const addCateRef = React.useRef(null);
    // const dispatch = ReactRedux.useDispatch();
    // // dish

    React.useEffect(() => {
        if (location.pathname !== locationString) {
            getRoute();
        }
    }, [location.pathname]);

    const getRoute = () => {
        let arrLocation = location.pathname.split('/');
        let elementExactlyLocation = arrLocation[arrLocation.length - 1];

        if (isPositiveInteger(elementExactlyLocation)) {
            setNumberArea(parseInt(elementExactlyLocation));
            setLocationString('/table');
            return;
        } else {
            const labelForm = breadcrumb.find((v) => v.link === location.pathname).link;
            setNumberArea(null);
            setLocationString(labelForm);
            return;
        }
        setLocationString('/');
    };

    function isPositiveInteger(x) {
        return /^\+?\d+$/.test(x);
    }

    const [form] = Form.useForm();

    const handleSubmitDish = (values) => {
        console.log(values);
        // addDishRef.current.addDish(values);
        form.resetFields();
        setVisible(false);
    };
    const handleSubmitCategory = (values) => {
        // addCateRef.current.addCate(values);
        form.resetFields();
        setVisible(false);
    };

    const handleOk = () => {
        form.submit();
    };

    const handleCancel = () => {
        setVisible(false);
        form.resetFields();
    };
    const switchWidthForm = (route) => {
        switch (route) {
            case '/dish':
                return window.innerWidth / 1.7;
            case '/area':
                return window.innerWidth / 2.5;
            case '/category':
                return window.innerWidth / 2;
            case '/customer':
                return window.innerWidth / 2.5;
            case '/promotion':
                return window.innerWidth / 2.5;
            case '/account':
                return window.innerWidth / 2.5;
            case '/table':
                return window.innerWidth / 2.5;
            default:
                return '300px';
        }
    };

    const switchForm = (route) => {
        switch (route) {
            case '/area':
                return <FormAddArea visible={visible} setVisible={setVisible} />;
            case '/account':
                return <FormAddAccount visible={visible} setVisible={setVisible} />;
            case '/category':
                return <FormAddCategory visible={visible} setVisible={setVisible} />;
            case '/customer':
                return <FormAddCustomer visible={visible} setVisible={setVisible} />;
            case '/dish':
                return <FormAddDish visible={visible} setVisible={setVisible} />;
            case '/table':
                return <FormAddTable visible={visible} setVisible={setVisible} id={numberArea} />;
            case '/promotion':
                return <FormAddPromotion visible={visible} setVisible={setVisible} />;
            default:
                return <></>;
        }
    };

    return (
        <Modal
            centered
            closable={false}
            visible={visible}
            className="modal"
            // width={`${switchWidthForm(labelForm.key)}`}
            // onCancel={handleCancel}
            // onOk={form.submit}
            footer={null}
            width={switchWidthForm(locationString)}
            // footer={[
            //     <Button type="primary" className="modal__btn modal__btn-cancel" onClick={handleCancel}>
            //         Hủy
            //     </Button>,
            //     <Button type="primary" className="modal__btn modal__btn-save" onClick={handleOk}>
            //         Lưu
            //     </Button>,
            // ]}
        >
            {locationString ? switchForm(locationString) : <></>}
        </Modal>
    );
};

export default DefaultModal;
