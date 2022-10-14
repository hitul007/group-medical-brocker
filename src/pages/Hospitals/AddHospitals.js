import * as React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogContentText, DialogActions } from '@mui/material';

import { PlusOutlined } from '@ant-design/icons';
import Typography from 'themes/overrides/Typography';

function AddHospitals() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="contained" size="large" startIcon={<PlusOutlined />} onClick={handleClickOpen}>
                Add Hospitals
            </Button>
            <Dialog maxWidth={'sm'} open={open} sx={{ width: '100%' }}>
                <DialogTitle>
                    <h1>Head</h1>
                </DialogTitle>
                <DialogContent>
                    <h2>Data</h2>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>save</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default AddHospitals;
