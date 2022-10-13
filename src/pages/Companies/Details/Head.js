import * as React from 'react';
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
    FormLabel
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { PlusOutlined, DeleteOutlined, EditOutlined, EllipsisOutlined, TeamOutlined, CloseOutlined } from '@ant-design/icons';

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

    return (
        <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" spacing={2}>
                <Avatar sx={{ width: 64, height: 64, borderRadius: '6px', color: '#1890ff', backgroundColor: '#e6f7ff' }}>DT</Avatar>
                <Box>
                    <Typography variant="h2">Digiqt Technolabs</Typography>
                    <Box sx={{ display: 'flex', gap: '0.5rem', mt: 1 }}>
                        <TeamOutlined style={{ fontSize: '16px', color: '#919191' }} />
                        <Typography variant="caption" sx={{ color: '#919191' }}>
                            100 Employees
                        </Typography>
                    </Box>
                </Box>
            </Stack>
            <Box>
                <Button variant="contained" startIcon={<PlusOutlined />} sx={{ mr: 2 }} onClick={NotaskClickOpen}>
                    Employee
                </Button>
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
                            <Typography sx={{ fontWeight: '900', fontSize: '20px' }}> New Employee</Typography>
                            <CloseOutlined onClick={NotaskhandleClose} />
                        </DialogTitle>
                    </Box>
                    <DialogContent
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem',
                            marginBottom: '1rem'
                        }}
                    >
                        <Box sx={{ width: '100%' }}>
                            <Stack sx={{ paddingTop: '1rem', display: 'flex', flexDirection: 'row', gap: '3rem' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                    <FormLabel id="demo-radio-buttons-group-label">First Name</FormLabel>
                                    <TextField />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                    <FormLabel id="demo-radio-buttons-group-label">Last Name</FormLabel>

                                    <TextField />
                                </Box>
                            </Stack>
                            <Stack
                                sx={{
                                    paddingTop: '1rem',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    gap: '3rem'
                                }}
                            >
                                <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
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
                                </Box>
                                <Box sx={{ width: '50%' }}>
                                    <FormControl sx={{ display: 'flex', flexDirection: 'column' }}>
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
                                    </FormControl>
                                </Box>
                            </Stack>
                            <Stack sx={{ paddingTop: '1rem', display: 'flex', flexDirection: 'row', gap: '3rem' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                    <FormLabel id="demo-radio-buttons-group-label">Health Id</FormLabel>
                                    <TextField />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                    <FormLabel id="demo-radio-buttons-group-label">Contact No</FormLabel>

                                    <TextField />
                                </Box>
                            </Stack>
                            <Stack sx={{ paddingTop: '1rem', display: 'flex', flexDirection: 'row', gap: '3rem' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                    <FormLabel id="demo-radio-buttons-group-label">Date Of Joining</FormLabel>
                                    <TextField />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                    <FormLabel id="demo-radio-buttons-group-label">Email</FormLabel>

                                    <TextField />
                                </Box>
                            </Stack>
                            <Stack sx={{ display: 'flex', alignItems: 'end', paddingTop: '3rem' }}>
                                <Button sx={{ backgroundColor: 'primary', color: 'black' }}>Create</Button>
                            </Stack>
                        </Box>
                    </DialogContent>
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
            </Box>
        </Stack>
    );
}

export default Head;
