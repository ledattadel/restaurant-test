import * as React from 'react';
import { Button, Col, Form, Row, Typography, Radio } from 'antd';
// import Radio from '@/components/Button/Radio';
import * as ReactRedux from 'react-redux';
import * as AreaAction from '@/redux/actions/areaAction';
import * as TableAction from '@/redux/actions/tableAction';
import { SettingsBrightnessOutlined } from '@mui/icons-material';
import actions from '@/redux/actions/areas';
const { Title } = Typography;

const FormEditTable = ({ visible, setVisible, data }) => {
    const [status, setStatus] = React.useState(null);
    const [form] = Form.useForm();
    const { areas } = ReactRedux.useSelector((state) => state.AreasDetail);
    const dispatch = ReactRedux.useDispatch();

    React.useEffect(() => {
        if (status === null) {
            const fetchData = async () => {
                await AreaAction.getStatuses().then((v) => {
                    setStatus(v);
                });
            };
            fetchData();
        }
    }, [status]);

    const editTable = (values) => {
        let table = { ...values, areaId: areas.id };
        console.log('edit table', table);
        dispatch(actions.updatedTable(data.id, table));
        // console.log(api);
    };

    const onFinish = (values) => {
        editTable(values);
        // console.log('res.status', res.status);
        // if (res.status === 201) {
        form.resetFields();
        setVisible(false);
        // }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const handleCancel = () => {
        setVisible(false);
        form.resetFields();
    };

    return (
        <div className="add-dish">
            <Title level={3} className="add-dish__title">
                Chỉnh sửa bàn khu vực {areas.id}
            </Title>
            <Form
                initialValues={{
                    ['code']: data.code,
                    ['statusId']: data.status.code,
                    ['description']: data.description,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="add-dish__form"
                layout="vertical"
            >
                <Row gutter={[24, 0]}>
                    <Col span={24}>
                        <Row gutter={[12, 0]}>
                            <Col span={12}>
                                <div className="add-dish__form-left">
                                    <Form.Item
                                        label="Tên bàn"
                                        name="code"
                                        rules={[{ required: true, message: 'Vui lòng nhập tên bàn!' }]}
                                    >
                                        <input
                                            className="add-dish__form__input add-dish__form__input-name"
                                            placeholder="Nhập tên bàn"
                                        />
                                    </Form.Item>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="add-dish__form-right">
                                    <Form.Item
                                        label="Trạng thái"
                                        style={{ marginBottom: '20px' }}
                                        name="statusId"
                                        rules={[{ required: true, message: 'Vui lòng chọn trạng thái!' }]}
                                    >
                                        <Radio.Group>
                                            {status &&
                                                status.map((v) => {
                                                    return <Radio value={v.code}>{v.name}</Radio>;
                                                })}
                                        </Radio.Group>
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
                                        placeholder="Nhập thông tin mô tả "
                                        rows="4"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="modal__controll">
                    <Button type="primary" onClick={() => handleCancel()} className="modal__btn modal__btn-cancel">
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

export default FormEditTable;
