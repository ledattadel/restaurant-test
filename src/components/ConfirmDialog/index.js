import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const AlertDialog = React.forwardRef((props, ref) => {
    React.useImperativeHandle(ref, () => ({
        handleClickOpen() {
            setOpen(true);
        },
        childFunction2() {
            console.log('child function 2 called');
        },
    }));

    const { title, content, childFunc, onDeleteConfirm } = props;
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const handleConfirm = () => {
        onDeleteConfirm();
        setOpen(false);
    };
    const handleNotConfirm = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">{content}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirm}>Yes</Button>
                    <Button onClick={handleNotConfirm} autoFocus>
                        No
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
});

export default AlertDialog;
