import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
// import { useDispatch} from 'react-redux';
import {
    DataGrid,
    GridCellModes,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarDensitySelector,
} from '@mui/x-data-grid';
import ConfirmDialog from '@/components/ConfirmDialog';

function EditToolbar(props) {
    const { selectedCellParams, cellMode, cellModesModel, setCellModesModel, onDelete } = props;
    // const [selectionModel, setSelectionModel] = React.useState([]);
    // const [loadingData, setLoadingData] = React.useState(true);

    const childRef = React.useRef(null);

    // const [rows, setRows] = React.useState(props.rows);

    // const dispatch = useDispatch();

    const handleSaveOrEdit = () => {
        if (!selectedCellParams) {
            return;
        }

        const { id, field } = selectedCellParams;

        if (cellMode === 'edit') {
            setCellModesModel({
                ...cellModesModel,
                [id]: { ...cellModesModel[id], [field]: { mode: GridCellModes.View } },
            });
        } else {
            setCellModesModel({
                ...cellModesModel,
                [id]: { ...cellModesModel[id], [field]: { mode: GridCellModes.Edit } },
            });
        }
    };

    const handleCancel = () => {
        if (!selectedCellParams) {
            return;
        }
        const { id, field } = selectedCellParams;
        setCellModesModel({
            ...cellModesModel,
            [id]: {
                ...cellModesModel[id],
                [field]: { mode: GridCellModes.View, ignoreModifications: true },
            },
        });
    };

    const handleMouseDown = (event) => {
        // Keep the focus in the cell
        event.preventDefault();
    };

    const handleConfirmDelete = () => {
        if (selectedCellParams) {
            childRef.current.handleClickOpen();
        }
    };

    return (
        <Box
            sx={{
                borderBottom: 1,
                borderColor: 'divider',
                p: 1,
            }}
        >
            <ConfirmDialog
                onDeleteConfirm={onDelete}
                ref={childRef}
                content="Do you want to delete ?"
                title="Delete"
            ></ConfirmDialog>
            <IconButton aria-label="delete" onClick={handleConfirmDelete} color="primary" className="IconButton">
                <DeleteIcon />
            </IconButton>

            <Button
                onClick={handleSaveOrEdit}
                onMouseDown={handleMouseDown}
                disabled={!selectedCellParams}
                variant="outlined"
            >
                {cellMode === 'edit' ? 'Save' : 'Edit'}
            </Button>
            <Button
                onClick={handleCancel}
                onMouseDown={handleMouseDown}
                disabled={cellMode === 'view'}
                variant="outlined"
                sx={{ ml: 1 }}
            >
                Cancel
            </Button>

            <GridToolbarColumnsButton />
            <GridToolbarFilterButton />
            <GridToolbarDensitySelector />
            <GridToolbarExport />
        </Box>
    );
}

EditToolbar.propTypes = {
    cellMode: PropTypes.oneOf(['edit', 'view']).isRequired,
    cellModesModel: PropTypes.object.isRequired,
    selectedCellParams: PropTypes.shape({
        field: PropTypes.string.isRequired,
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    }),
    setCellModesModel: PropTypes.func.isRequired,
};

const FormMenu = ({
    rows,
    columns,
    handleDelete,
    handleSelectionModel,
    handleOnSelectionModelChange,
    numOfPageSize,
}) => {
    const [selectedCellParams, setSelectedCellParams] = React.useState(null);
    const [cellModesModel, setCellModesModel] = React.useState({});

    const handleCellFocus = React.useCallback((event) => {
        const row = event.currentTarget.parentElement;
        const id = row.dataset.id;
        // console.log('id.', id);
        const field = event.currentTarget.dataset.field;
        // console.log('field.', field);
        setSelectedCellParams({ id, field });
    }, []);

    const cellMode = React.useMemo(() => {
        if (!selectedCellParams) {
            return 'view';
        }
        const { id, field } = selectedCellParams;
        return cellModesModel[id]?.[field]?.mode || 'view';
    }, [cellModesModel, selectedCellParams]);

    const handleCellKeyDown = React.useCallback(
        (params, event) => {
            if (cellMode === 'edit') {
                // Prevents calling event.preventDefault() if Tab is pressed on a cell in edit mode

                event.defaultMuiPrevented = true;
            }
        },
        [cellMode],
    );

    const onDelete = () => {
        handleDelete();
    };

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                onCellKeyDown={handleCellKeyDown}
                cellModesModel={cellModesModel}
                components={{
                    Toolbar: EditToolbar,
                }}
                componentsProps={{
                    toolbar: {
                        cellMode,
                        selectedCellParams,
                        setSelectedCellParams,
                        cellModesModel,
                        setCellModesModel,
                        rows,
                        columns,
                        onDelete,
                    },
                    cell: {
                        onFocus: handleCellFocus,
                    },
                }}
                pageSize={numOfPageSize}
                selectionModel={handleSelectionModel}
                onSelectionModelChange={handleOnSelectionModelChange}
                experimentalFeatures={{ newEditingApi: true }}
            />
        </div>
    );
};

export default FormMenu;
