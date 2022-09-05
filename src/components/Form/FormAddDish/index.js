import * as Redux from 'react-redux';
import * as React from 'react';
import {
    Form,
    Input,
    InputNumber,
    Popconfirm,
    Table,
    Typography,
    Switch,
    Space,
    message,
    Upload,
    Select,
    Button,
    Modal,
} from 'antd';
import { CheckOutlined, CloseOutlined, InboxOutlined } from '@ant-design/icons';
import * as DishActions from '@/redux/actions/dishAction';
import './FormAddDish.scss';

const { Text, Link } = Typography;
const { Dragger } = Upload;
const { Option } = Select;

const FormAddDish = (props) => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [visible, setVisible] = React.useState(false);
    const [noneText, setNoneText] = React.useState(false);
    const [form] = Form.useForm();
    const [textNewMenu, setTextNewMenu] = React.useState('');
    const { sizeDish, menuList, allergyList, meatList } = props;
    const dispatch = Redux.useDispatch();

    const handleOk = () => {};

    const handleCancel = () => {
        form.resetFields();
    };

    const onChangeSwitch = (e) => {
        if (e) {
            setNoneText(true);
        } else {
            setNoneText(false);
            setTextNewMenu('aaaa');
        }
    };

    const handleChangeNewMenu = (event) => {
        setTextNewMenu(event.target.value);
    };

    // const createDish = () => {};

    const createDish = (value) => {
        let isNewMenu = true;
        for (let index = 0; index < menuList.length; index++) {
            console.log('menuList[index].name', menuList[index].name);

            if (menuList[index].name == value.menu) {
                console.log(1);
                value.menuId = menuList[index].id;
                isNewMenu = false;
            }
        }

        let payload = {
            allergy: value.allergy,
            description: value.description,
            meat: value.meat,
            menuId: isNewMenu ? 0 : value.menuId,
            name: value.name,
            number: value.number,
            price: value.price,
            size: value.size.split(),
            waitingTime: value.waitingTime,
        };

        console.log('payload when input', payload);
        dispatch(DishActions.submitDish(payload)).then(function (response) {
            console.log('Response submit dish:', response);

            // setTotalDishes(response.length);
            // console.log(totalDishes);
        });
    };

    const handleSubmit = (values) => {
        console.log(values);
        createDish(values);
    };
    const handleResetForm = () => {
        form.resetFields();
    };

    return (
        <Form form={form} onFinish={handleSubmit} name="nest-messages">
            <div className="Modal-main addDish">
                <div style={{ width: '100%', marginBottom: '10px' }}>
                    <h1 className="title" style={{ marginLeft: '128px' }}>
                        {' '}
                        ADD DISH
                    </h1>
                </div>
                <div className="Modal-left">
                    <Form.Item name={noneText ? 'noneMenu' : 'menu'} label="Menu">
                        <Select
                            defaultValue="Please pick your menu"
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
                            style={{
                                width: '270px',
                                marginLeft: '50px',
                            }}
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
                            {allergyList
                                ? allergyList.map((v) => {
                                      return <Option key={v.id} value={`${v.name}`}>{`${v.name}`}</Option>;
                                  })
                                : []}
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
                            {meatList
                                ? meatList.map((v) => {
                                      return <Option key={v.id} value={`${v.name}`}>{`${v.name}`}</Option>;
                                  })
                                : []}
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
                            {sizeDish
                                ? sizeDish.map((item) => {
                                      return <Option key={item.id} value={`${item.name}`}>{`${item.name}`}</Option>;
                                  })
                                : []}
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

                    <div style={{ marginLeft: '127px' }}>
                        {' '}
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button
                            style={{
                                width: '80px',
                                marginLeft: '33px',
                            }}
                            onClick={handleResetForm}
                        >
                            Reset
                        </Button>
                    </div>
                </div>
                <div className="Modal-right"></div>
            </div>
        </Form>
    );
};

export default FormAddDish;
