import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space, Switch } from 'antd';
import { CheckOutlined, CloseOutlined, InboxOutlined } from '@ant-design/icons';

import * as React from 'react';
import './index.scss';

const { Option } = Select;

const App = (props) => {
    const [visible, setVisible] = React.useState(false);
    const { childFunc, sizeDish, menuList, allergyList, meatList } = props;
    const [form] = Form.useForm();
    const [noneText, setNoneText] = React.useState(false);
    const [textNewMenu, setTextNewMenu] = React.useState('');

    React.useEffect(() => {
        childFunc.current = showDrawer;
    }, []);

    const showDrawer = (record) => {
        console.log('record', record);
        setVisible(true);
    };
    const handleChangeNewMenu = (event) => {
        setTextNewMenu(event.target.value);
    };

    const onChangeSwitch = (e) => {
        if (e) {
            setNoneText(true);
        } else {
            setNoneText(false);
            setTextNewMenu('aaaa');
        }
    };

    const onClose = () => {
        setVisible(false);
    };

    const handleSubmit = (values) => {
        console.log(values);
        // createDish(values);

        setVisible(false);
    };
    const handleResetForm = () => {
        form.resetFields();
    };

    return (
        <Drawer
            className="Drawer_updateDish"
            getContainer={false}
            style={{
                position: 'absolute',
            }}
            width={500}
            onClose={onClose}
            visible={visible}
            bodyStyle={{
                paddingBottom: 80,
            }}
            placement="left"
        >
            <Form form={form} onFinish={handleSubmit} name="nest-messages">
                <div className="Modal-main editDish">
                    <div style={{ width: '100%', marginBottom: '10px', marginLeft: '-15px' }}>
                        <h1 className="title">UPDATE DISH</h1>
                    </div>
                    <div className="Modal-left">
                        <Form.Item name={noneText ? 'noneMenu' : 'menu'} label="Menu">
                            <Select
                                style={{
                                    width: '270px',
                                    marginLeft: '80px',
                                }}
                            >
                                {menuList.map((item) => {
                                    return <Option key={item.id} value={`${item.name}`}>{`${item.name}`}</Option>;
                                })}
                            </Select>
                        </Form.Item>
                        <Switch
                            checkedChildren={<CheckOutlined />}
                            unCheckedChildren={<CloseOutlined />}
                            onChange={onChangeSwitch}
                            className="switchNewMenu"
                        />
                        <Form.Item
                            name={noneText ? 'menu' : 'noneMenu'}
                            label="New menu"
                            style={{
                                display: 'flex',
                            }}
                            className="formNewMenu"
                        >
                            <Input
                                disabled={!noneText}
                                onChange={handleChangeNewMenu}
                                value={textNewMenu}
                                className="inputFormNewMenu"
                            ></Input>
                        </Form.Item>
                        <Form.Item label="Name" name="name" style={{}}>
                            <Input
                                required
                                defaultValue=""
                                style={{
                                    width: '270px',
                                    marginLeft: '78px',
                                }}
                            ></Input>
                        </Form.Item>
                        <Form.Item label="Number" name="number" style={{}}>
                            <Input
                                defaultValue=""
                                style={{
                                    width: '270px',
                                    marginLeft: '65px',
                                }}
                            ></Input>
                        </Form.Item>
                        <Form.Item label="Description" name="description" style={{}}>
                            <Input
                                style={{
                                    width: '270px',
                                    marginLeft: '44px',
                                }}
                            ></Input>
                        </Form.Item>
                        <Form.Item label="Price" name="price" style={{}}>
                            <Input
                                style={{
                                    width: '270px',
                                    marginLeft: '83px',
                                }}
                            ></Input>
                        </Form.Item>
                        <Form.Item name="allergy" label="Allergy">
                            <Select
                                mode="multiple"
                                size="middle"
                                placeholder="Please select"
                                // onChange={handleChange}
                                style={{
                                    width: '270px',
                                    marginLeft: '72px',
                                }}
                            >
                                {allergyList.map((v) => {
                                    return <Option key={v.id} value={`${v.name}`}>{`${v.name}`}</Option>;
                                })}
                            </Select>
                        </Form.Item>
                        <Form.Item name="meat" label="Meat">
                            <Select
                                mode="multiple"
                                size="middle"
                                placeholder="Please select"
                                // onChange={handleChange}
                                style={{
                                    width: '270px',
                                    marginLeft: '83px',
                                }}
                            >
                                {meatList.map((v) => {
                                    return <Option key={v.id} value={`${v.name}`}>{`${v.name}`}</Option>;
                                })}
                            </Select>
                        </Form.Item>
                        <Form.Item name="size" label="Size">
                            <Select
                                // defaultValue="SELECT DISH SIZE"
                                style={{
                                    width: '270px',
                                    marginLeft: '89px',
                                }}
                            >
                                {sizeDish.map((item) => {
                                    return <Option key={item.id} value={`${item.name}`}>{`${item.name}`}</Option>;
                                })}
                            </Select>
                        </Form.Item>
                        <Form.Item label="Waiting Time" name="waitingTime">
                            <Input
                                defaultValue=""
                                style={{
                                    width: '270px',
                                    marginLeft: '33px',
                                }}
                            ></Input>
                        </Form.Item>
                    </div>
                </div>

                <Button
                    type="primary"
                    htmlType="submit"
                    style={{
                        position: 'absolute',
                        left: '175px',
                    }}
                >
                    Submit
                </Button>
            </Form>
        </Drawer>
    );
};

export default App;
