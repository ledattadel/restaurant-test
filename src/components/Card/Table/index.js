import React from 'react';
import './index.scss';

import * as TableIcon from '@/assets/table-icon';

const TableCard = ({ product }) => {
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
                        <TableIcon.EditIcon color={'#F78B2D'} />
                        <TableIcon.DeleteIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableCard;
