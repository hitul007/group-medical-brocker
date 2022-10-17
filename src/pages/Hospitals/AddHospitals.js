import * as React from 'react';
// import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogContentText, DialogActions, Grid, Box } from '@mui/material';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormLabel,
    Grid,
    IconButton,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

function AddHospitals() {
    const [state, setState] = React.useState({
        open: false
    });

    const NotaskClickOpen = () => {
        setState((prevState) => ({ ...prevState, open: true }));
    };

    const NotaskhandleClose = () => {
        setState((prevState) => ({ ...prevState, open: false }));
    };
    const isDesktop = useMediaQuery('(min-width:600px)');
    return (
        <>
            <Button variant="contained" size="large" startIcon={<PlusOutlined />} onClick={NotaskClickOpen}>
                {isDesktop ? 'Add New Hospitals' : 'Add'}
            </Button>
            <Dialog
                open={state.open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={true}
                maxWidth="sm"
            >
                <Box>
                    <DialogTitle id="alert-dialog-title" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography variant="h3">New Hospital</Typography>
                        <IconButton onClick={NotaskhandleClose}>
                            <CloseOutlined />
                        </IconButton>
                    </DialogTitle>
                </Box>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Stack>
                                <FormLabel required id="demo-radio-buttons-group-label">
                                    Hospital name
                                </FormLabel>
                                <TextField r />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack direction="row" spacing={2}>
                                <Stack direction="column" sx={{ width: '100%' }}>
                                    <FormLabel required id="demo-radio-buttons-group-label">
                                        State
                                    </FormLabel>
                                    <TextField fullWidth />
                                </Stack>
                                <Stack direction="column" sx={{ width: '100%' }}>
                                    <FormLabel required id="demo-radio-buttons-group-label">
                                        District
                                    </FormLabel>
                                    <TextField fullWidth />
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack>
                                <FormLabel required id="demo-radio-buttons-group-label">
                                    Doctor name 1
                                </FormLabel>
                                <TextField />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack>
                                <FormLabel id="demo-radio-buttons-group-label">Doctor name 2</FormLabel>
                                <TextField />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Stack>
                                <FormLabel required id="demo-radio-buttons-group-label">
                                    google map URL
                                </FormLabel>
                                <TextField />
                            </Stack>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" size="large">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default AddHospitals;
