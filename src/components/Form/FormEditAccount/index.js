import { Button, DatePicker, Form, Typography, Row, Col, Select, Radio } from 'antd';
import React from 'react';
import * as Redux from 'react-redux';
import actions from '@/redux/actions/account';
import { EyeOpen, EyeClosed } from 'akar-icons';
import { getNoneParams } from '@/utils/fetchData';
import { VscTriangleRight, VscTriangleUp, VscTriangleDown } from 'react-icons/vsc';
import moment from 'moment';
const { Title } = Typography;
const { Option } = Select;

const FormEditAccount = React.forwardRef(({ visible, setVisible, data }, ref) => {
    const dispatch = Redux.useDispatch();
    const [typePass, setTypePass] = React.useState(false);
    const [role, setRole] = React.useState(null);
    const [value, setValue] = React.useState([]);
    const [dataRole, setDataRole] = React.useState([]);
    const [fullName, setFullName] = React.useState('');
    // address
    // identityCard
    // phoneNumber
    // role
    const [birthday, setBirthday] = React.useState(new Date());
    const [phoneNumber, setPhoneNumber] = React.useState('');

    React.useEffect(() => {
        const getRole = async () => {
            try {
                const { data } = await getNoneParams({
                    path: `user-role`,
                });
                setRole(data);
            } catch (error) {
                throw error.response.data;
            }
        };

        getRole();
    }, []);
    const selectProps = {
        mode: 'multiple',
        value,
        onChange: (newValue) => {
            setValue(newValue);
        },
        placeholder: 'Select Item...',
        maxTagCount: 'responsive',
    };
    console.log(data);
    const getRndInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    const dataWithRole = (arrRole) => {
        // let arrRole = data.userWithRoles;
        let rs = [];
        for (let index = 0; index < arrRole.length; index++) {
            rs.push(arrRole[index].code);
        }

        return rs;
    };
    const onFinish = (values) => {
        // values.id = getRndInteger(100, 1000);
        console.log('values', values);
        dispatch(actions.updatedUser(data.id, values));
        setVisible(false);
    };

    const onFinishFailed = (errorInfo) => {};

    return (
        <div className="add-account">
            <Title level={3} className="add-account__title">
                Sửa nhân viên
            </Title>
            <Form
                initialValues={{
                    ['fullName']: data.fullName,
                    ['address']: data.address,
                    ['identityCard']: data.identityCard,
                    ['phoneNumber']: data.phoneNumber,
                    ['role']: data.role.code,
                    ['status']: data.status.code,
                    ['timeStart']: moment(data.timeStart),
                    ['userWithRoles']: dataWithRole(data.userWithRoles),
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="add-category__form"
                layout="vertical"
            >
                <Row gutter={[18, 0]}>
                    <Col span={24}>
                        <Form.Item
                            label="Họ và tên"
                            name="fullName"
                            rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}
                        >
                            <input
                                type="text"
                                className="add-account__form__input"
                                placeholder="Nhập tên của nhân viên"
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[18, 0]}>
                    <Col span={24}>
                        <Form.Item
                            label="Địa chỉ"
                            name="address"
                            rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}
                        >
                            <input type="text" className="add-account__form__input" placeholder="Nhập địa chỉ" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[18, 0]}>
                    <Col xs={24} lg={12}>
                        <Form.Item
                            label="Số CMND"
                            name="identityCard"
                            rules={[{ required: true, message: 'Vui lòng nhập số CMND!' }]}
                        >
                            <input type="text" className="add-account__form__input" placeholder="Nhập số CMND" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} lg={12}>
                        <Form.Item
                            label="Số điện thoại"
                            name="phoneNumber"
                            rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
                        >
                            <input type="text" className="add-account__form__input " placeholder="Nhập số điện thoại" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[18, 0]}>
                    <Col xs={24} lg={12}>
                        <Form.Item
                            label="Chức vụ"
                            name="role"
                            rules={[{ required: true, message: 'Vui lòng chọn chức vụ!' }]}
                        >
                            <Select placeholder="Chọn chức vụ">
                                {/* <Option value="Quản lý">Quản lý</Option>
                                <Option value="Thu ngân">Thu ngân</Option>
                                <Option value="Phục vụ">Phục vụ</Option>
                                <Option value="Đầu bếp">Đầu bếp</Option> */}
                                {role &&
                                    role.map((v) => {
                                        return <Option value={v.code}>{v.description}</Option>;
                                    })}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} lg={12}>
                        <Form.Item
                            label="Trạng thái"
                            style={{ marginBottom: '20px' }}
                            name="status"
                            rules={[{ required: true, message: 'Vui lòng chọn trạng thái!' }]}
                        >
                            <Radio.Group>
                                <Radio value="WORKING">Đang làm</Radio>
                                <Radio value="NOWORK">Đã nghỉ</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[18, 0]}>
                    <Col xs={24} lg={12}>
                        <Form.Item
                            label="Thời gian làm"
                            name="timeStart"
                            rules={[{ required: true, message: 'Vui lòng nhập ngày bắt dầu!' }]}
                        >
                            <DatePicker
                                className="add-account__form__input"
                                format={'MM/DD/YYYY'}
                                placeholder="mm/dd/yyyy"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} lg={12}>
                        <Form.Item
                            label="Mật khẩu"
                            name="password"
                            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                        >
                            <div className="pass">
                                <input
                                    name="password"
                                    type={typePass ? 'text' : 'password'}
                                    className="add-promotion__form__input add-promotion__form__input-discount"
                                    placeholder="Mật khẩu"
                                />

                                <div
                                    className="icon-showPassword"
                                    onClick={() => {
                                        setTypePass(!typePass);
                                    }}
                                >
                                    {typePass ? (
                                        <EyeOpen className="add-promotion__form__icon" style={{ color: 'F78B2D' }} />
                                    ) : (
                                        <EyeClosed className="add-promotion__form__icon" style={{ color: 'A3A3A3' }} />
                                    )}
                                </div>
                            </div>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[18, 0]}>
                    <Col span={24}>
                        <Form.Item
                            label="Phân quyền"
                            name="userWithRoles"
                            rules={[{ required: true, message: 'Vui lòng chọn lựa phân quyền!' }]}
                        >
                            <Select {...selectProps}>
                                {/* <Option value="Quản lý">Quản lý</Option>
                                <Option value="Thu ngân">Thu ngân</Option>
                                <Option value="Phục vụ">Phục vụ</Option>
                                <Option value="Đầu bếp">Đầu bếp</Option> */}

                                {role &&
                                    role.map((v) => {
                                        return <Option value={v.code}>{v.description}</Option>;
                                    })}
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <div className="modal__controll">
                    <Button type="primary" onClick={() => setVisible(false)} className="modal__btn modal__btn-cancel">
                        Hủy
                    </Button>

                    <Button type="primary" htmlType="submit" className="modal__btn modal__btn-save">
                        Lưu
                    </Button>
                </div>
            </Form>
        </div>
    );
});

export default FormEditAccount;
