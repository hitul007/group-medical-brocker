import { CloseOutlined } from '@ant-design/icons';
import SendIcon from '@mui/icons-material/Send';
import {
    Alert,
    Box,
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid,
    IconButton,
    Snackbar,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import React from 'react';

function EmpPorEndorsement() {
    const [state, setState] = React.useState({
        open: false
    });

    const NotaskClickOpen = () => {
        setState((prevState) => ({ ...prevState, open: true }));
    };

    const NotaskhandleClose = () => {
        setState((prevState) => ({ ...prevState, open: false }));
    };

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <>
            <Typography variant="h4">Raise Endorsement Request to Insurance Company</Typography>
            <Stack sx={{ mt: 2 }} direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={2}>
                <Typography>Select Your issue</Typography>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Full name" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Company name" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Email" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Contact No." />
                    <FormControlLabel control={<Checkbox />} label="Aadhar Number" />
                    <FormControlLabel control={<Checkbox />} label="PAN number" />
                    <FormControlLabel control={<Checkbox />} label="PED info" />
                </FormGroup>
                <Button variant="contained" endIcon={<SendIcon />} onClick={NotaskClickOpen}>
                    Request
                </Button>
                <Dialog
                    open={state.open}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    fullWidth={true}
                    maxWidth="xs"
                >
                    <Box>
                        <DialogTitle
                            id="alert-dialog-title"
                            sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
                        >
                            <Typography variant="h3">Enter new information</Typography>
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
                                        Company name
                                    </FormLabel>
                                    <TextField />
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Stack>
                                    <FormLabel required id="demo-radio-buttons-group-label">
                                        Email id
                                    </FormLabel>
                                    <TextField />
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Stack>
                                    <FormLabel required id="demo-radio-buttons-group-label">
                                        Contact No.
                                    </FormLabel>
                                    <TextField />
                                </Stack>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            variant="contained"
                            size="large"
                            fullWidth
                            sx={{ mx: 2, mb: 0.5 }}
                            endIcon={<SendIcon />}
                            onClick={handleClick}
                        >
                            Send Endorsement request
                        </Button>
                        <Snackbar
                            open={open}
                            autoHideDuration={6000}
                            onClose={handleClose}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        >
                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                Endorsement request send successfully !
                            </Alert>
                        </Snackbar>
                    </DialogActions>
                </Dialog>
            </Stack>
        </>
    );
}

export default EmpPorEndorsement;
