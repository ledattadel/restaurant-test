import { Form, Input, InputNumber, Popconfirm, Table, Typography, message, Button, Space } from 'antd';
import * as React from 'react';
import * as MenuActions from '@/redux/actions/menuAction';
import './menu.pages.scss';
import * as Redux from 'react-redux';

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

const Menu = () => {
    const [form] = Form.useForm();
    const [data, setData] = React.useState(originData);
    const [editingKey, setEditingKey] = React.useState('');
    const [menuList, setMenuList] = React.useState([]);
    const [loadingData, setLoadingData] = React.useState(true);

    const dispatch = Redux.useDispatch();
    const isEditing = (record) => record.id === editingKey;

    React.useEffect(() => {
        function getData() {
            MenuActions.fetchStoreMenu(true).then((res) => {
                setMenuList(res.data);
                setLoadingData(false);
            });
        }
        if (loadingData) {
            getData();
        }
    }, []);

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            width: '25',
            editable: false,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            width: '250',
            editable: true,
        },
        {
            title: '',
            dataIndex: '',
            width: '5%',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <Typography.Link
                            onClick={() => save(record)}
                            style={{
                                marginRight: 8,
                            }}
                        >
                            Save
                        </Typography.Link>
                        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                            <a>Cancel</a>
                        </Popconfirm>
                    </span>
                ) : (
                    <Button disabled={editingKey !== ''} onClick={() => edit(record)}>
                        Edit
                    </Button>
                );
            },
        },
        {
            title: '',
            key: '',
            width: '5%',
            render: (menu) => (
                <Space size="middle">
                    <Popconfirm
                        placement="rightBottom"
                        title="Are you sure to delete this Menu?"
                        onConfirm={() => confirmDelete(menu.id)}
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

    const edit = (record) => {
        form.setFieldsValue({
            id: '',
            name: '',
            ...record,
        });
        console.log('record.key:', record);
        setEditingKey(record.id);
    };
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    const cancel = () => {
        setEditingKey('');
    };

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

            dispatch(MenuActions.updateStoreMenu(newRecord));
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
            // }

            // console.log(newData,":",index);
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const confirmDelete = (id) => {
        console.log('delete:', id);

        const deleteMenuById = () => {
            dispatch(MenuActions.deleteStoreMenu(id)).then(function (response) {});
            setMenuList(menuList.filter((menu) => menu.id !== id));
        };

        deleteMenuById();
    };

    return (
        <div className="table" style={{ display: 'flex', marginTop: '100px' }}>
            <Form form={form} component={false}>
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    dataSource={menuList}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
                        onChange: cancel,
                    }}
                />
            </Form>
        </div>
    );
};

export default Menu;
