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
    Typography
} from '@mui/material';
import * as React from 'react';

import { DeleteOutlined, EditOutlined, EllipsisOutlined, PlusSquareOutlined } from '@ant-design/icons';
import useMediaQuery from '@mui/material/useMediaQuery';
function EmpHead() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const isDesktop = useMediaQuery('(min-width:600px)');
    return (
        <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" spacing={2}>
                {isDesktop ? (
                    <Avatar sx={{ width: 70, height: 70, borderRadius: '6px', color: '#1890ff', backgroundColor: '#e6f7ff' }}>RF</Avatar>
                ) : (
                    <Avatar sx={{ width: 50, height: 50, borderRadius: '6px', color: '#1890ff', backgroundColor: '#e6f7ff' }}>RF</Avatar>
                )}
                <Box>
                    {isDesktop ? (
                        <Typography variant="h1" sx={{ fontWeight: '900' }}>
                            Ravi Faddu
                        </Typography>
                    ) : (
                        <Typography variant="h4" sx={{ fontWeight: '900' }}>
                            Ravi Faddu
                        </Typography>
                    )}
                    <Box sx={{ display: 'flex', gap: '0.5rem', mt: 1 }}>
                        <PlusSquareOutlined style={{ fontSize: '16px', color: '#919191' }} />
                        <Typography variant="caption" sx={{ color: '#919191' }}>
                            00-1111-2222-3333
                        </Typography>
                    </Box>
                </Box>
            </Stack>
            <Box>
                <IconButton aria-label="delete" onClick={handleClick} sx={{ transform: 'rotate(90deg)' }}>
                    <EllipsisOutlined />
                </IconButton>

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

export default EmpHead;
