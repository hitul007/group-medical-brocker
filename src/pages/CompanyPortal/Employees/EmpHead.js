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
    Button
} from '@mui/material';
import React, { useState } from 'react';
import Claimdialog from 'pages/Claims/Claimsdialog';
import { DeleteOutlined, EditOutlined, EllipsisOutlined, PlusSquareOutlined, PlusOutlined } from '@ant-design/icons';

function EmpHead() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClickOpen = () => {
        setIsModalOpen(true);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <>
            <Stack direction="row" justifyContent="space-between">
                <Stack direction="row" spacing={2}>
                    <Avatar sx={{ width: 64, height: 64, borderRadius: '6px', color: '#1890ff', backgroundColor: '#e6f7ff' }}>RF</Avatar>
                    <Box>
                        <Typography variant="h2">Ravi Fadadu</Typography>
                        <Box sx={{ display: 'flex', gap: '0.5rem', mt: 1 }}>
                            <PlusSquareOutlined style={{ fontSize: '16px', color: '#919191' }} />
                            <Typography variant="caption" sx={{ color: '#919191' }}>
                                00-1111-2222-3333
                            </Typography>
                        </Box>
                    </Box>
                </Stack>
                <Box>
                    <Box className="d-flex">
                        <Box className="d-none d-lg-block">
                            <Button variant="contained" startIcon={<PlusOutlined />} onClick={() => handleClickOpen()}>
                                Add Claims
                            </Button>
                            <Claimdialog modalOpen={isModalOpen} setModalOpen={setIsModalOpen}></Claimdialog>
                        </Box>

                        <IconButton aria-label="delete" onClick={handleClick} sx={{ transform: 'rotate(90deg)' }}>
                            <EllipsisOutlined />
                        </IconButton>
                    </Box>
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
            <Box className="d-lg-none d-block pt-2">
                <Button fullWidth variant="contained" startIcon={<PlusOutlined />} onClick={() => handleClickOpen()}>
                    Add Claims
                </Button>
            </Box>
        </>
    );
}

export default EmpHead;
