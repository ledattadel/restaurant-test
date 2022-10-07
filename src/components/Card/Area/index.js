import * as React from 'react';
import * as TableIcon from '@/assets/table-icon';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { GLOBALTYPES } from '@/redux/actions/globalTypes';
import * as ReactRedux from 'react-redux';
import { Button, message, Popconfirm, Tooltip, Modal } from 'antd';
import ModalComponent from '@/components/ModalComponent';
import FormEditArea from '@/components/Form/FormEditArea';
import actions from '@/redux/actions/areas';
import constants from '@/redux/constants/areas';
const { confirm } = Modal;
const text = 'Bạn muốn xóa khu vực này?';
const textToolTip = 'Nhấn vào để chọn khu vực?';
const AreaCard = ({ product, deleteArea }) => {
    const [openModalUpdate, setOpenModalUpdate] = React.useState(false);
    const [hoverBtn, setHoverBtn] = React.useState(false);
    const [visible, setVisible] = React.useState(false);

    const navigate = useNavigate();
    const dispatch = ReactRedux.useDispatch();
    const handleClick = (e) => {
        console.log(product);
        // dispatch({
        //     type: GLOBALTYPES.LOADAREAID,
        //     payload: product.id,
        // });

        dispatch({
            type: constants.AREAS_DETAIL_SUCCESS,
            payload: product,
        });
        navigate(`/area/table`);
    };

    const confirm = () => {
        deleteArea(product.id);
        // dispatch(actions.deleteCategory(product.id));
    };
    const showConfirm = (event) => {};
    return (
        <div onClick={handleClick} className="table_area">
            <div className="table_area--head">
                <span className="table_area--name">{product.name}</span>
                <div
                    style={
                        {
                            // zIndex: '2',
                        }
                    }
                    className="table_area--head-handing"
                >
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                            setVisible(true);
                        }}
                    >
                        <TableIcon.EditIcon />
                    </div>
                    <div onClick={(e) => e.stopPropagation()}>
                        <Popconfirm placement="topLeft" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                            <TableIcon.DeleteIcon />
                        </Popconfirm>
                    </div>
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
            <ModalComponent
                visible={visible}
                setVisible={setVisible}
                width={window.innerWidth / 2}
                maskClosable={false}
                componentForm={<FormEditArea data={product} visible={visible} setVisible={setVisible}></FormEditArea>}
            />
        </div>
    );
};

export default AreaCard;
