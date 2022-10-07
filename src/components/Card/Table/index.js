import React from 'react';
import './index.scss';
import ModalComponent from '@/components/ModalComponent';
import FormEditTable from '@/components/Form/FormEditTable';
import { Button, message, Popconfirm, Tooltip, Modal } from 'antd';
import * as TableIcon from '@/assets/table-icon';
const text = 'Bạn muốn xóa khu vực này?';

const TableCard = ({ product, DeleteTable }) => {
    const [visible, setVisible] = React.useState(false);

    const confirm = () => {
        DeleteTable(product.id);
        // dispatch(actions.deleteCategory(product.id));
    };
    return (
        <div className="table_card">
            <div className="table_cardLeft">
                <TableIcon.TableIcon />
            </div>

            <div className="table_cardRight">
                <span className="table_right--name">{product.code}</span>
                <span className="table_right--stt">
                    Trạng thái: <span className="table_area--stt-2">{product.status.name}</span>
                </span>
                <div className="table_right--footer">
                    <span className="table_right--id">
                        Mã ID: <span className="table_right--id-2">{product.id}</span>
                    </span>
                    <div className="table_right--handing">
                        <div
                            onClick={(e) => {
                                e.stopPropagation();
                                setVisible(true);
                            }}
                        >
                            <TableIcon.EditIcon />
                        </div>
                        <div onClick={(e) => e.stopPropagation()}>
                            <Popconfirm
                                placement="topLeft"
                                title={text}
                                onConfirm={confirm}
                                okText="Yes"
                                cancelText="No"
                            >
                                <TableIcon.DeleteIcon />
                            </Popconfirm>
                        </div>
                    </div>
                </div>
            </div>
            <ModalComponent
                visible={visible}
                setVisible={setVisible}
                width={window.innerWidth / 2}
                maskClosable={false}
                componentForm={<FormEditTable data={product} visible={visible} setVisible={setVisible}></FormEditTable>}
            />
        </div>
    );
};

export default TableCard;
