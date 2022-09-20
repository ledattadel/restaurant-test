import React from 'react';
import './index.scss';
import DeleteIcon from '@/assets/table-icon/delete.icon';
import EditIcon from '@/assets/table-icon/edit.icon';
import { useNavigate } from 'react-router-dom';
import TableIcon from '@/assets/table-icon/table.icon';

const TableCard = ({ name, status, id }) => {
    return (
        <div className="table_card">
            <div className="table_cardLeft">
                <TableIcon></TableIcon>
            </div>

            <div className="table_cardRight">
                <span className="table_right--name">{name}</span>
                <span className="table_right--stt">
                    Trạng thái: <span className="table_area--stt-2">{status}</span>
                </span>
                <div className="table_right--footer">
                    <span className="table_right--id">
                        Mã ID: <span className="table_right--id-2">{id}</span>
                    </span>
                    <div className="table_right--handing">
                        <EditIcon></EditIcon>
                        <DeleteIcon></DeleteIcon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableCard;
