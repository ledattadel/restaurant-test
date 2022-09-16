import React from 'react';
import './index.scss';
import DeleteIcon from '@/assets/table-icon/delete.icon';
import EditIcon from '@/assets/table-icon/edit.icon';
import { useNavigate } from 'react-router-dom';

const TableCard = ({ name, sum, status, id }) => {
    const navigate = useNavigate;

    const handleClick = () => {
        navigate();
    };
    return (
        <div onClick={handleClick} className="table_area">
            <div className="table_area--head">
                <span className="table_area--name">{name}</span>
                <div className="table_area--head-handing">
                    <EditIcon></EditIcon>
                    <DeleteIcon></DeleteIcon>
                </div>
            </div>

            <div className="table_area--info">
                <span className="table_area_info--sum">Tổng bàn: {sum}</span>
                <span className="table_area_info--id">Mã ID: {id}</span>
            </div>

            <span className="table_area--stt">
                Trạng thái: <span className="table_area--stt-2">{status}</span>
            </span>
        </div>
    );
};

export default TableCard;
