import * as React from 'react';
import { Col, Form, Row, Typography, Button, Radio } from 'antd';
import Dragger from '@/components/Dragger';
import RadioComponent from '@/components/Button/Radio';
import SelectBox from '@/components/SelectBox';
import * as DishAction from '@/redux/actions/dishAction';
import * as ReactRedux from 'react-redux';
// import checkValidate from '@/utils/checkValidate';

const { Title } = Typography;

const FormAddDish = React.forwardRef(({ form, onFinish }, ref) => {
    // const [validateName, setValidateName] = React.useState(false);
    // const [name, setName] = React.useState('');
    const [fileList, setFileList] = React.useState([]);
    const [menuId, setMenuId] = React.useState('');
    const [dish, setDish] = React.useState('');
    const [value, setValue] = React.useState('');
    const [status, setStatus] = React.useState('');
    const dispatch = ReactRedux.useDispatch();
    React.useImperativeHandle(ref, () => ({
        addDish,
    }));

    const addDish = async (values) => {
        console.log('value modal tranfer to addDish:', values);
        values.image = fileList[0].originFileObj;
        values.companyId = 0;
        values.adminId = 1;
        values.menuId = menuId;

        const api = await dispatch(DishAction.submitDish(values));

        console.log(api);
    };

    React.useEffect(() => {
        getStatuses();
    }, [status]);

    const getStatuses = async () => {
        await DishAction.getStatuses().then((v) => {
            setStatus(v);
        });
    };

    return (
        <div className="add-dish">
            <Title level={3} className="add-dish__title">
                Thêm món ăn
            </Title>
            <Form form={form} onFinish={onFinish} className="add-dish__form" layout="vertical">
                <Row gutter={[24, 0]}>
                    <Col xs={24} lg={13}>
                        <Row gutter={[18, 0]}>
                            <Col span={12}>
                                <div className="add-dish__form-left">
                                    <Form.Item label="Tên món ăn" name="name">
                                        <input
                                            type="text"
                                            className="add-dish__form__input add-dish__form__input-name"
                                            placeholder="Nhập tên của món"
                                        />
                                    </Form.Item>
                                    <Form.Item label="Danh mục" name="menuId">
                                        <SelectBox setMenuId={setMenuId} />
                                    </Form.Item>
                                    <Form.Item label="Giá" name="price">
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
                                    <Form.Item label="Trạng thái" style={{ marginBottom: '20px' }} name="statusCode">
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
                                    <Form.Item label="Định lượng" name="estimate">
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
                                <Form.Item label="Mô tả" name="description">
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
            </Form>
        </div>
    );
});

export default FormAddDish;
