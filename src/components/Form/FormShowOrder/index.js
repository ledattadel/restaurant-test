// import * as Redux from 'react-redux';
import * as React from 'react';
import {
    // Form,
    // Typography,
    // Upload,
    // Select,
    Button,
} from 'antd';
import './FormShowOrder.model.scss';
import { useReactToPrint } from 'react-to-print';

// const { Text, Link } = Typography;
// const { Dragger } = Upload;
// const { Option } = Select;

const FormShowOrder = ({ record }) => {
    // const [isModalVisible, setIsModalVisible] = React.useState(false);
    // const [visible, setVisible] = React.useState(false);
    // const [noneText, setNoneText] = React.useState(false);
    // const [form] = Form.useForm();
    // const [textNewMenu, setTextNewMenu] = React.useState('');
    // const dispatch = Redux.useDispatch();

    const componentRef = React.useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        copyStyles: true,
    });

    return (
        <>
            <div style={{ backgroundColor: 'white' }} className="Modal-main">
                <div
                    ref={componentRef}
                    style={{ width: '100%', marginBottom: '10px', border: '1px solid black', padding: '5px' }}
                >
                    <h1 className="title" style={{ marginLeft: '120px', width: '100%' }}>
                        {' '}
                        Order Details
                    </h1>
                    <br></br>

                    {record ? (
                        <>
                            <h5>User_Details</h5>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h6>Name: {record.userName}</h6>
                                <h6>Phone: {record.userPhone}</h6>
                            </div>
                            <hr></hr>

                            <hr></hr>
                            <h5>DishName: {record.orderDetailsDishName}</h5>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <h6>Quantity: {record.orderDetailsQuantity}</h6>
                                    <h6>Number: {record.orderDetailsDishNumber} </h6>
                                    <h6>Price: {record.orderDetailsPrice}</h6>
                                    <h6>Discount: {record.orderDetailsDiscount}</h6>
                                </div>
                                <div>
                                    <h6>Tax: {record.orderDetailsTax}</h6>
                                    <h6>Comment: {record.orderDetailsComment} </h6>
                                    <h6>Meat: {record.orderDetailsMeat}</h6>
                                    <h6>Size: {record.orderDetailsSize}</h6>
                                </div>
                            </div>
                            <hr></hr>
                            <hr></hr>
                            <h5>Total</h5>
                            <h6>status: {record.status}</h6>
                            <h6>Order-Number: {record.orderNumber}</h6>
                            <h6>Order-date: {record.orderDate}</h6>
                            <h6>Pickup-Time: {record.pickupTime}</h6>
                            <h6>Total-Discount: {record.totalDiscount}</h6>
                            <h6>Total-Tax: {record.totalTax}</h6>
                            <h6>PostTaxAmount: {record.postTaxAmount}</h6>
                        </>
                    ) : (
                        <>
                            <h1>BLANK</h1>
                        </>
                    )}
                </div>
            </div>
            <Button
                style={{
                    width: '80px',
                    marginLeft: '150px',
                }}
                onClick={handlePrint}
            >
                Print
            </Button>
        </>
    );
};

export default FormShowOrder;
