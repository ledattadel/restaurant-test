import * as React from 'react';
import { Col, Form, Row, Typography, Button } from 'antd';
import { Dragger, SelectBox, Radio } from '@/components';
import * as ReactRedux from 'react-redux';
import * as DishAction from '@/redux/actions/dishAction';
import actions from '@/redux/actions/category';

const { Title } = Typography;

const FormAddCategory = ({ visible, setVisible, setAddnew }) => {
    const [fileList, setFileList] = React.useState([]);

    const dispatch = ReactRedux.useDispatch();
    const addCate = async (values) => {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        values.image = fileList[0].originFileObj;
        values.companyId = currentUser.companyId;
        const api = await dispatch(actions.createCategory(values));
    };

    const onFinish = (values) => {
        console.log('Success:', values);
        const res = addCate(values);
        console.log('res.status', res.status);
        setVisible(false);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="add-category">
            <Title level={3} className="add-category__title">
                Thêm danh mục
            </Title>
            <Form onFinish={onFinish} onFinishFailed={onFinishFailed} className="add-category__form" layout="vertical">
                <Row gutter={[24, 0]}>
                    <Col xs={24} lg={13}>
                        <Row gutter={[18, 0]}>
                            <Col span={24}>
                                <Form.Item
                                    name="name"
                                    label="Tên danh mục"
                                    rules={[{ required: true, message: 'Nhập tên danh mục!' }]}
                                >
                                    <input
                                        type="text"
                                        className="add-category__form__input add-category__form__input-name"
                                        placeholder="Nhập tên của danh mục"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="description"
                                    label="Mô tả"
                                    rules={[{ required: true, message: 'Nhập mô tả!' }]}
                                >
                                    <textarea
                                        className="add-category__form-area"
                                        placeholder="Nhập thông tin mô tả món ăn"
                                        rows="4"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} lg={11}>
                        <Dragger fileList={fileList} setFileList={setFileList} />
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
};

export default FormAddCategory;
