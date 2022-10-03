import * as React from 'react';
import { Col, Form, Row, Typography, Button, Radio, Select } from 'antd';
import Dragger from '@/components/Dragger';
import RadioComponent from '@/components/Button/Radio';
import SelectBox from '@/components/SelectBox';
import * as DishAction from '@/redux/actions/dishAction';
import * as ReactRedux from 'react-redux';
// import checkValidate from '@/utils/checkValidate';
const { Option } = Select;
const { Title } = Typography;

const FormAddDish = React.forwardRef((props, ref) => {
    // const [validateName, setValidateName] = React.useState(false);
    // const [name, setName] = React.useState('');
    const { visible, setVisible } = props;
    const [fileList, setFileList] = React.useState([]);
    const [menuId, setMenuId] = React.useState('');
    const [menu, setMenu] = React.useState(null);
    const [dish, setDish] = React.useState('');
    const [value, setValue] = React.useState('');
    const [status, setStatus] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    const [category, setCategory] = React.useState(null);
    const dispatch = ReactRedux.useDispatch();
    // React.useImperativeHandle(ref, () => ({
    //     addDish,
    // }));

    const addDish = async (values) => {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        values.menuId = category;
        values.adminId = 1;

        values.image = fileList[0].originFileObj;
        values.companyId = currentUser.companyId;
        const api = await dispatch(DishAction.submitDish(values));

        console.log(api);
    };

    React.useEffect(() => {
        if (status === null) {
            const fetchData = async () => {
                await DishAction.getStatuses().then((v) => {
                    setStatus(v);
                });
                await DishAction.getMenu().then((v) => {
                    setMenu(v);
                });
            };
            setIsLoading(true);
            fetchData();
        }
    }, [status]);

    const onFinish = (values) => {
        console.log('Success:', values);
        const res = addDish(values);
        console.log('res.status', res.status);
        // if (res.status === 201) {
        setVisible(false);
        setCategory(null);
        // }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setCategory(null);
    };

    return (
        <div className="add-dish">
            <Title level={3} className="add-dish__title">
                Thêm món ăn
            </Title>
            <Form onFinish={onFinish} onFinishFailed={onFinishFailed} className="add-dish__form" layout="vertical">
                <Row gutter={[24, 0]}>
                    <Col xs={24} lg={13}>
                        <Row gutter={[18, 0]}>
                            <Col span={12}>
                                <div className="add-dish__form-left">
                                    <Form.Item
                                        label="Tên món ăn"
                                        name="name"
                                        rules={[{ required: true, message: 'Vui lòng nhập món ăn!' }]}
                                    >
                                        <input
                                            type="text"
                                            className="add-dish__form__input add-dish__form__input-name"
                                            placeholder="Nhập tên của món"
                                        />
                                    </Form.Item>
                                    <Form.Item label="Danh mục" name="menuId">
                                        <SelectBox menu={menu} setCate={setCategory}></SelectBox>
                                    </Form.Item>
                                    <Form.Item
                                        label="Giá"
                                        name="price"
                                        rules={[{ required: true, message: 'Vui lòng nhập giá!' }]}
                                    >
                                        <input
                                            type="number"
                                            min={1}
                                            className="add-dish__form__input add-dish__form__input-price"
                                            placeholder="Nhập giá của món"
                                        />
                                    </Form.Item>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="add-dish__form-right">
                                    <Form.Item
                                        label="Trạng thái"
                                        style={{ marginBottom: '20px' }}
                                        name="statusCode"
                                        rules={[{ required: true, message: 'Vui lòng chọn trạng thái!' }]}
                                    >
                                        {/* <Radio status={'Còn món'} checked={true} />
                                        <Radio status={'Hết món'} /> */}
                                        <Radio.Group>
                                            {status
                                                ? status.map((v) => {
                                                      return <Radio value={v.code}>{v.name}</Radio>;
                                                  })
                                                : ''}
                                        </Radio.Group>
                                    </Form.Item>
                                    <Form.Item
                                        label="Định lượng"
                                        name="estimate"
                                        rules={[{ required: true, message: 'Vui lòng nhập định lượng!' }]}
                                    >
                                        <input
                                            type="text"
                                            className="add-dish__form__input add-dish__form__input-quantitative"
                                            placeholder="Nhập định lượng của món"
                                        />
                                    </Form.Item>
                                    <Form.Item label="Giảm giá" name="priceDiscount">
                                        <input
                                            type="number"
                                            min={1}
                                            className="add-dish__form__input add-dish__form__input-discount"
                                            placeholder="Nhập số tiền giảm"
                                        />
                                    </Form.Item>
                                </div>
                            </Col>
                            <Col span={24}>
                                <Form.Item
                                    label="Mô tả"
                                    name="description"
                                    rules={[{ required: true, message: 'Vui lòng nhập mô tả!' }]}
                                >
                                    <textarea
                                        className="add-dish__form-area"
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
                <div className="modal__controll" style={{}}>
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

export default FormAddDish;
