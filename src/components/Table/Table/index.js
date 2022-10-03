import React from 'react';
import * as TableIcon from '@/assets/table-icon';
import {VscTriangleUp, VscTriangleDown} from 'react-icons/vsc'


const Table = ({ data, column }) => {
    return (
        <table className="new-table">
            <thead className="new-table__head">
                <tr className="new-table__head__row">
                    {column.map((item, index) => (
                        <TableHeadItem key={index} item={item} />
                    ))}
                    <th className="new-table__head__row__col-active">Thao tác</th>
                </tr>
            </thead>
            <tbody className="new-table__body">
                {data.map((item) => (
                    <TableRow key={item.id} item={item} column={column} />
                ))}
            </tbody>
        </table>
    );
};

const TableHeadItem = ({ item }) => (
    <th className={`new-table__head__row__col-${item.value}`}>
        {item.value === 'name' ? (
            <>
                {item.heading}
                <VscTriangleDown/>
            </>
        ) : (
            <>{item.heading}</>
        )}
    </th>
);
const TableRow = ({ item, column }) => (
    <tr className="new-table__body__row">
        {column.map((columnItem, index) => {
            if (columnItem.value.includes('.')) {
                const itemSplit = columnItem.value.split('.'); //['address', 'city']
                return (
                    <td className={`new-table__body__row__col-${columnItem.value}`} key={index}>
                        {item[itemSplit[0]][itemSplit[1]]}
                    </td>
                );
            }

            return (
                <td className={`new-table__body__row__col-${columnItem.value}`} key={index}>
                    {item[`${columnItem.value}`]}
                </td>
            );
        })}
        <td>
            <div className="data-table__datas__actions">
                <button className="data-table__datas__actions__button data-table__datas__actions__button-edit">
                    <TableIcon.EditIcon color={'#413ED4'} />
                </button>
                <button className="data-table__datas__actions__button data-table__datas__actions__button-delete">
                    <TableIcon.DeleteIcon />
                </button>
            </div>
        </td>
    </tr>
);

export default Table;
