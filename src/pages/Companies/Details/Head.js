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
    FormLabel,
    Grid
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { PlusOutlined, DeleteOutlined, EditOutlined, EllipsisOutlined, TeamOutlined, CloseOutlined } from '@ant-design/icons';
import DialogActions from '@mui/material/DialogActions';

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
                            <Button color="primary" variant="contained" size="large">
                                Create
                            </Button>
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
            </Box>
        </Stack>
    );
}

export default Head;
