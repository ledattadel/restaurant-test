import * as React from 'react';
import * as DishActions from '@/redux/actions/dishAction';
import * as MenuActions from '@/redux/actions/menuAction';
import {
    Form,
    Input,
    InputNumber,
    Popconfirm,
    Table,
    Typography,
    Button,
    Space,
    Modal,
    message,
    Upload,
    Select,
    Switch,
} from 'antd';
import { CheckOutlined, CloseOutlined, InboxOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import * as Redux from 'react-redux';
import { plPL } from '@mui/x-data-grid';
import './dish.pages.scss';
import FormAddDish from '@/components/Form/FormAddDish';
import FormEditDish from '@/components/Form/FormEditDish';
const { Text, Link } = Typography;
const { Dragger } = Upload;
const { Option } = Select;

const originData = [];

const EditableCell = ({ editing, dataIndex, title, inputType, record, index, children, ...restProps }) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0,
                    }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

const Dish = () => {
    const [form] = Form.useForm();
    const [menuList, setMenuList] = React.useState([]);
    const [allergyList, setAllergyList] = React.useState([]);
    const [meatList, setMeatList] = React.useState([]);
    const [loadingData, setLoadingData] = React.useState(true);
    const [data, setData] = React.useState(originData);
    const [editingKey, setEditingKey] = React.useState('');
    const childFunc = React.useRef(null);
    const [dishes, setDishes] = React.useState([]);

    const [visible, setVisible] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const childRef = React.useRef(null);
    const childUpdateDishRef = React.useRef(null);

    const size = [
        { id: 1, name: 'S' },
        { id: 2, name: 'M' },
        { id: 3, name: 'L' },
        { id: 4, name: 'XL' },
    ];

    const dispatch = Redux.useDispatch();
    const isEditing = (record) => record.id === editingKey;
    function getData() {
        MenuActions.fetchStoreMenu(true).then((res) => {
            setMenuList(res.data);
        });
        MenuActions.fetchLookup('allergy').then((res) => {
            setAllergyList(res.data);
        });
        MenuActions.fetchLookup('meat').then((res) => {
            setMeatList(res.data);
        });
        DishActions.getAllDishes().then((res) => {
            setDishes(res.data);
        });

        setLoadingData(false);
    }
    React.useEffect(() => {
        if (loadingData) {
            getData();
        }
    }, []);

    const edit = (record) => {
        form.setFieldsValue({
            Picture: '',
            Name: '',
            Description: '',
            Menu: '',
            price: '',
            ...record,
        });
        console.log('record.key:', record);
        setEditingKey(record.id);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );

    const save = async (record) => {
        try {
            console.log('Record ', record);
            let newRecord;
            const row = await form.validateFields().then((value) => {
                newRecord = {
                    id: record.id,
                    name: value.name,
                };
            });
            dispatch(
                MenuActions.updateStoreMenu(newRecord).then((res) => {
                    console.log('sau khi chay dispatch updata store menu', res);
                }),
            );
            let newMenuList = menuList.map((item) => {
                if (item.id === newRecord.id) {
                    return newRecord;
                } else {
                    return item;
                }
            });
            console.log('NewMenu:', newMenuList);

            setMenuList(newMenuList);

            const newData = [...data];

            newData.push(row);
            setData(newData);
            setEditingKey('');
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const confirmDeleteDish = (id) => {
        console.log('delete:', id);
        const deleteDishes = () => {
            dispatch(DishActions.deleteDish(id));
        };

        deleteDishes();
    };

    const handleShowModalUpdateDish = (record) => {
        childFunc.current(record);
    };

    const columns = [
        {
            // Picture	Name	Description	Price	Edit/Delete
            title: 'Picture',
            dataIndex: 'picture',
            key: 'picture',
            width: 200,

            render: (dataIndex) => <img alt={dataIndex} src={dataIndex} />,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: 400,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            width: 400,
        },
        {
            title: 'Menu',
            dataIndex: ['menu', 'name'],
            key: 'menu',
            filters: menuList.map((item, index, items) => {
                return {
                    text: item.name,
                    value: item.name,
                };
            }),

            onFilter: (value, record) => record.menu.name.toString().toLowerCase().includes(value.toLowerCase()),
            width: 200,
        },
        {
            title: 'price',
            dataIndex: 'price',
            key: 'price',
            width: '50',
        },
        {
            title: '',
            dataIndex: '',
            width: '50',
            render: (_, record) => {
                return (
                    <>
                        <Button
                            type="primary"
                            onClick={() => {
                                // setVisible(true);

                                handleShowModalUpdateDish(record);
                            }}
                        >
                            Edit
                        </Button>
                    </>
                );
            },
        },
        {
            title: '',
            key: '',
            width: '5%',
            render: (dish) => (
                <Space size="middle">
                    <Popconfirm
                        placement="rightBottom"
                        title="Are you sure to delete this Dish?"
                        onConfirm={() => confirmDeleteDish(dish.id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="primary" danger>
                            Delete
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === 'id' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    return (
        <div style={{ height: '100%', display: 'flex', position: 'relative' }}>
            <div
                style={{
                    width: '500px',
                    height: '100%',
                    backgroundColor: 'white',
                    padding: '50px',
                }}
            >
                <FormAddDish
                    sizeDish={size}
                    menuList={menuList}
                    allergyList={allergyList}
                    meatList={meatList}
                ></FormAddDish>

                <FormEditDish
                    sizeDish={size}
                    menuList={menuList}
                    allergyList={allergyList}
                    meatList={meatList}
                    childFunc={childFunc}
                ></FormEditDish>
            </div>
            <div className="table" style={{ display: 'flex', marginTop: '50px' }}>
                <Form form={form} component={false}>
                    <Table
                        components={{
                            body: {
                                cell: EditableCell,
                            },
                        }}
                        bordered
                        dataSource={dishes}
                        columns={mergedColumns}
                        rowClassName="editable-row"
                        pagination={{
                            onChange: cancel,
                        }}
                    />
                </Form>
            </div>
        </div>
    );
};

export default Dish;
