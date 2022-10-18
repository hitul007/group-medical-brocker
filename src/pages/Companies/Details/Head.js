import React, { useState } from 'react';
import {
    Avatar,
    Box,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Popover,
    Stack,
    Typography,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    TextField,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
    FormLabel,
    Grid,
    Snackbar,
    Alert
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { PlusOutlined, DeleteOutlined, EditOutlined, EllipsisOutlined, TeamOutlined, CloseOutlined } from '@ant-design/icons';
import DialogActions from '@mui/material/DialogActions';
import useMediaQuery from '@mui/material/useMediaQuery';

import Claimdialog from 'pages/Claims/Claimsdialog';
function Head() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const [state, setState] = React.useState({
        open: false
    });

    const NotaskClickOpen = () => {
        setState((prevState) => ({ ...prevState, open: true }));
    };

    const NotaskhandleClose = () => {
        setState((prevState) => ({ ...prevState, open: false }));
    };
    const [value, setValue] = React.useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const isDesktop = useMediaQuery('(min-width:600px)');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleClickOpen = () => {
        setIsModalOpen(true);
    };

    const [snack, setsnack] = React.useState(false);

    const handleSnackClick = () => {
        setsnack(true);
    };

    const handleSnackClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setsnack(false);
    };
    return (
        <>
            <Stack direction="row" justifyContent="space-between">
                <Stack direction="row" spacing={2}>
                    {isDesktop ? (
                        <Avatar sx={{ width: 70, height: 70, borderRadius: '6px', color: '#1890ff', backgroundColor: '#e6f7ff' }}>
                            DT
                        </Avatar>
                    ) : (
                        <Avatar sx={{ width: 50, height: 50, borderRadius: '6px', color: '#1890ff', backgroundColor: '#e6f7ff' }}>
                            DT
                        </Avatar>
                    )}

                    <Box>
                        {isDesktop ? (
                            <Typography variant="h1" sx={{ fontWeight: '900' }}>
                                Digiqt Technolabs
                            </Typography>
                        ) : (
                            <Typography variant="h4" sx={{ fontWeight: '900' }}>
                                Digiqt Technolabs
                            </Typography>
                        )}

                        <Box sx={{ display: 'flex', gap: '0.5rem', mt: 1 }}>
                            <TeamOutlined style={{ fontSize: '16px', color: '#919191' }} />
                            <Typography variant="caption" sx={{ color: '#919191' }}>
                                100 Employees
                            </Typography>
                        </Box>
                    </Box>
                </Stack>

                <Stack direction="row" spacing={1}>
                    <Box className="d-none d-lg-block">
                        <Button variant="outlined" startIcon={<PlusOutlined />} sx={{ mr: 2 }} onClick={NotaskClickOpen}>
                            Employee
                        </Button>
                        <Button variant="contained" startIcon={<PlusOutlined />} onClick={() => handleClickOpen()}>
                            Add Claims
                        </Button>
                        <Claimdialog modalOpen={isModalOpen} setModalOpen={setIsModalOpen}></Claimdialog>
                    </Box>

                    <IconButton aria-label="delete" onClick={handleClick} sx={{ transform: 'rotate(90deg)' }}>
                        <EllipsisOutlined />
                    </IconButton>
                    <Dialog
                        open={state.open}
                        onClose={NotaskhandleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        fullWidth={true}
                        maxWidth="md"
                    >
                        <Box>
                            <DialogTitle
                                id="alert-dialog-title"
                                sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
                            >
                                <Typography variant="h3"> New Employee</Typography>
                                <IconButton>
                                    <CloseOutlined onClick={NotaskhandleClose} />
                                </IconButton>
                            </DialogTitle>
                        </Box>
                        <DialogContent
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1rem'
                            }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Stack>
                                        <FormLabel required id="demo-radio-buttons-group-label">
                                            First Name
                                        </FormLabel>
                                        <TextField />
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Stack>
                                        <FormLabel id="demo-radio-buttons-group-label">Last Name</FormLabel>
                                        <TextField />
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Stack>
                                        <FormLabel id="demo-radio-buttons-group-label">Date Of Birth</FormLabel>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                value={value}
                                                onChange={(newValue) => {
                                                    setValue(newValue);
                                                }}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </LocalizationProvider>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Stack>
                                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="Male"
                                            name="radio-buttons-group"
                                            sx={{ display: 'flex', flexDirection: 'row' }}
                                        >
                                            <FormControlLabel value="female" control={<Radio />} label="Male" />
                                            <FormControlLabel value="male" control={<Radio />} label="Female" />
                                            <FormControlLabel value="male" control={<Radio />} label="Other" />
                                        </RadioGroup>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Stack>
                                        <FormLabel required id="demo-radio-buttons-group-label">
                                            Health ID
                                        </FormLabel>
                                        <TextField />
                                    </Stack>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <Stack>
                                        <FormLabel id="demo-radio-buttons-group-label">Contact No.</FormLabel>
                                        <TextField />
                                    </Stack>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <Stack>
                                        <FormLabel id="demo-radio-buttons-group-label">Date Of Joining</FormLabel>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                value={value}
                                                onChange={(newValue) => {
                                                    setValue(newValue);
                                                }}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </LocalizationProvider>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Stack>
                                        <FormLabel required id="demo-radio-buttons-group-label">
                                            Email
                                        </FormLabel>
                                        <TextField />
                                    </Stack>
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'end'
                                }}
                            >
                                <Button color="primary" variant="contained" size="large" onClick={handleSnackClick}>
                                    Create
                                </Button>
                                <Snackbar
                                    open={snack}
                                    autoHideDuration={6000}
                                    onClose={handleSnackClose}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                >
                                    <Alert onClose={handleSnackClose} severity="success" sx={{ width: '100%' }}>
                                        Employee create successfully !
                                    </Alert>
                                </Snackbar>
                            </Box>
                        </DialogActions>
                    </Dialog>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left'
                        }}
                        sx={{
                            '.MuiPopover-paper': {
                                width: '150px'
                            }
                        }}
                    >
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <EditOutlined />
                                    </ListItemIcon>
                                    <ListItemText primary="Edit" />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="#simple-list">
                                    <ListItemIcon>
                                        <DeleteOutlined />
                                    </ListItemIcon>
                                    <ListItemText primary="Delete" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Popover>
                </Stack>
            </Stack>
            <Box className="d-block d-lg-none pt-2 d-flex gap-2 ">
                <Button fullWidth variant="outlined" startIcon={<PlusOutlined />} sx={{ mr: 2 }} onClick={NotaskClickOpen}>
                    Employee
                </Button>
                <Button fullWidth variant="contained" startIcon={<PlusOutlined />} onClick={() => handleClickOpen()}>
                    Add Claims
                </Button>
                <Claimdialog modalOpen={isModalOpen} setModalOpen={setIsModalOpen}></Claimdialog>
            </Box>
        </>
    );
}

export default Head;
