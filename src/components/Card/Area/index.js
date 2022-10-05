import * as React from 'react';
import * as TableIcon from '@/assets/table-icon';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { GLOBALTYPES } from '@/redux/actions/globalTypes';
import * as ReactRedux from 'react-redux';
import { Button, message, Popconfirm, Tooltip, Modal } from 'antd';

const { confirm } = Modal;

const text = 'Bạn muốn xóa khu vực này?';
const textToolTip = 'Nhấn vào để chọn khu vực?';
const AreaCard = ({ product, DeleteArea }) => {
    const navigate = useNavigate();
    const dispatch = ReactRedux.useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        console.log(product);
        dispatch({
            type: GLOBALTYPES.LOADAREAID,
            payload: product.id,
        });
        navigate(`/area/table`);
    };

    const confirm = () => {
        message.info('Xóa thành công');
    };
    const showConfirm = () => {
        setTimeout(() => {
            confirm({
                content: 'Bạn muốn xóa khu vực này ???',

                onOk() {
                    console.log('OK');
                },

                onCancel() {
                    console.log('Cancel');
                },
            });
        }, 500);
    };
    return (
        <div onClick={handleClick} className="table_area">
            <div className="table_area--head">
                <span className="table_area--name">{product.name}</span>
                <div
                    style={{
                        zIndex: '999',
                    }}
                    className="table_area--head-handing"
                >
                    <TableIcon.EditIcon color={'#F78B2D'} />

                    <Popconfirm placement="topLeft" title={text} okText="Yes" cancelText="No">
                        <TableIcon.DeleteIcon onClick={showConfirm} />
                    </Popconfirm>
                </div>
            </div>
            {/* <Tooltip placement="topLeft" title={textToolTip}> */}

            <div className="table_area--info">
                <span className="table_area_info--sum">Tổng bàn: Chưa có</span>
                <span className="table_area_info--id">Mã ID: {product.id}</span>
            </div>

            <span className="table_area--stt">
                Trạng thái: <span className="table_area--stt-2">{product.areaStatus.name}</span>
            </span>

            {/* </Tooltip> */}
        </div>
    );
};

export default AreaCard;
