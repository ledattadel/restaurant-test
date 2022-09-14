import * as React from 'react';
import * as DishActions from '@/redux/actions/dishAction';
import * as MenuActions from '@/redux/actions/menuAction';
import * as OrderActions from '@/redux/actions/orderAction';
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
import {
    CheckOutlined,
    EyeOutlined,
    CloseOutlined,
    InboxOutlined,
    LoadingOutlined,
    PlusOutlined,
    SearchOutlined,
    EyeInvisibleOutlined,
} from '@ant-design/icons';

import Highlighter from 'react-highlight-words';

import * as Redux from 'react-redux';
import { plPL } from '@mui/x-data-grid';
import './index.scss';
import FormAddDish from '@/components/Form/FormAddDish/';
import FormEditDish from '@/components/Form/FormEditDish';
import FormShowOrder from '@/components/Form/FormShowOrder';
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

let tranferDataToPlatJson = (oldJSON) => {
    let newJSON = oldJSON.map((v) => {
        return {
            key: v.id,
            orderNumber: v.orderNumber,
            orderDate: new Date(v.orderDate).toLocaleString(),
            pickupTime: new Date(v.pickupTime).toLocaleString(),
            preTaxAmount: v.preTaxAmount,
            totalDiscount: v.totalDiscount,
            totalTax: v.totalTax,
            postTaxAmount: v.postTaxAmount,
            status: v.status,
            userId: v.user.id,
            userName: v.user.firstName + ' ' + v.user.lastName,
            userPhone: v.user.phone,
            storeId: v.store.id,
            storeName: v.store.name,
            storeAddressFormatted_address: v.store.address.formatted_address,
            storeAddressLocationLat: v.store.address.location.lat,
            storeAddressLocationLng: v.store.address.location.lng,
            storePhone: v.store.phone,
            orderDetailsId: v.orderDetails,
            orderDetailsDishName: v.orderDetails[0].dishName,
            orderDetailsDishNumber: v.orderDetails[0].dishNumber,
            orderDetailsQuantity: v.orderDetails[0].quantity,
            orderDetailsPrice: v.orderDetails[0].price,
            orderDetailsDiscount: v.orderDetails[0].discount,
            orderDetailsTax: v.orderDetails[0].tax,
            orderDetailsComment: v.orderDetails[0].comment,
            orderDetailsMeat: v.orderDetails[0].meat,
            orderDetailsSize: v.orderDetails[0].size,
        };
    });

    return newJSON;
};

const Order = () => {
    const [form] = Form.useForm();

    const [activeView, setActiveView] = React.useState(0);
    const [loadingData, setLoadingData] = React.useState(true);
    const [data, setData] = React.useState(originData);
    const [editingKey, setEditingKey] = React.useState('');
    const [record, setRecord] = React.useState({});

    const childFunc = React.useRef(null);

    const [orderList, setOrderList] = React.useState([]);

    const [visible, setVisible] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const childRef = React.useRef(null);

    const dispatch = Redux.useDispatch();
    const isEditing = (record) => record.id === editingKey;
    function getData() {
        OrderActions.getAllOrder().then((v) => {
            setOrderList(tranferDataToPlatJson(v));
            console.log(tranferDataToPlatJson(v));
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

    // "user": {
    //     "id": 49,
    //     "firstName": "Khang",
    //     "lastName": "Test",
    //     "phone": "234324456"
    // },

    const [searchText, setSearchText] = React.useState('');
    const [searchedColumn, setSearchedColumn] = React.useState('');
    const searchInput = React.useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div
                style={{
                    padding: 8,
                }}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    const tranferDate = (date) => {
        date = new Date(date);
        date = date.toLocaleString();

        return date;
    };

    const handleShowOrder = (record) => {
        if (activeView === record.key) {
            //close
            setActiveView(0);
            setRecord({});
        } else {
            setActiveView(record.key);

            setRecord(record);
        }

        console.log('record.id', record);
    };
    const columns = [
        {
            // Picture	Name	Description	Price	Edit/Delete
            title: 'Username',
            dataIndex: 'userName',
            key: 'username',
            width: 200,
            ...getColumnSearchProps('userName'),
        },
        {
            title: 'Phone',
            dataIndex: 'userPhone',
            key: 'phone',
            width: 200,
            ...getColumnSearchProps('userPhone'),
        },
        {
            title: 'OrderDate',
            dataIndex: 'orderDate',
            key: 'orderDate',
            width: 200,
            ...getColumnSearchProps('orderDate'),
        },

        {
            title: 'pickupTime',
            dataIndex: 'pickupTime',
            key: 'pickupTime',
            width: 200,
            ...getColumnSearchProps('pickupTime'),
        },
        {
            title: 'status',
            dataIndex: 'status',
            key: 'status',
            width: 175,
            filters: [
                {
                    text: 'OPEN',
                    value: 'OPEN',
                },
                {
                    text: 'CLOSED',
                    value: 'CLOSED',
                },
                {
                    text: 'CANCEL_BY_STORE',
                    value: 'CANCEL_BY_STORE',
                },
            ],
            onFilter: (value, record) => record.status === value,
        },
        // {
        //     title: 'Menu',
        //     dataIndex: ['menu', 'name'],
        //     key: 'menu',
        //     filters: menuList.map((item, index, items) => {
        //         return {
        //             text: item.name,
        //             value: item.name,
        //         };
        //     }),

        //     onFilter: (value, record) => record.menu.name.toString().toLowerCase().includes(value.toLowerCase()),
        //     width: 200,
        // },
        {
            title: 'price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: '',
            dataIndex: '',
            width: '5%',
            render: (_, record) => {
                return (
                    <>
                        <Button
                            icon={activeView === record.key ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                            type="primary"
                            danger={activeView === record.key ? true : false}
                            onClick={
                                () => handleShowOrder(record)

                                // setVisible(true);
                                // handleShowModalUpdateDish(record);
                            }
                        >
                            View
                        </Button>
                    </>
                );
            },
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
        <div style={{ display: 'flex', position: 'relative', backgroundColor: '#f0f2f5' }}>
            <div
                style={{
                    width: '500px',
                    height: '100%',

                    padding: '50px',
                }}
            >
                <FormShowOrder record={record ? record : {}}></FormShowOrder>
            </div>
            <div className="table" style={{ display: 'flex', marginTop: '100px' }}>
                <Form form={form} component={false}>
                    <Table
                        components={{
                            body: {
                                cell: EditableCell,
                            },
                        }}
                        bordered
                        dataSource={orderList}
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

export default Order;
