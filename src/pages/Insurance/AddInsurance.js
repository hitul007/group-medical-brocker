import * as React from 'react';
// import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogContentText, DialogActions, Grid, Box } from '@mui/material';
import { CloseOutlined, PlusOutlined, PlusCircleOutlined } from '@ant-design/icons';
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

function AddInsurance() {
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
                {isDesktop ? 'Add New Insurance' : 'Add'}
            </Button>
            <Dialog
                open={state.open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={true}
                maxWidth="xs"
            >
                <Box>
                    <DialogTitle id="alert-dialog-title" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography variant="h3">New Insurance</Typography>
                        <IconButton onClick={NotaskhandleClose}>
                            <CloseOutlined />
                        </IconButton>
                    </DialogTitle>
                </Box>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Stack>
                                <FormLabel required id="demo-radio-buttons-group-label">
                                    Insurance title
                                </FormLabel>
                                <TextField />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Stack direction="row" alignItems="end" spacing={2}>
                                <Stack direction="column" sx={{ width: '100%' }}>
                                    <FormLabel required id="demo-radio-buttons-group-label">
                                        Insurance key features
                                    </FormLabel>
                                    <TextField fullWidth />
                                </Stack>
                                <Stack direction="column" sx={{ width: '20%' }}>
                                    <Button startIcon={<PlusCircleOutlined />}>Add</Button>
                                </Stack>
                            </Stack>
                            <Box
                                sx={{
                                    ul: {
                                        px: 2,
                                        py: 0,
                                        color: '#919191'
                                    }
                                }}
                            >
                                <ul>
                                    <li>
                                        <Typography>Hospitalization Expenses</Typography>
                                    </li>
                                    <li>
                                        <Typography>Health Insurance for Employees</Typography>
                                    </li>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Stack>
                                <FormLabel required id="demo-radio-buttons-group-label">
                                    Webpage URL
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

export default AddInsurance;
