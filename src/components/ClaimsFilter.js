import * as React from 'react';
import { Button, Popover, Typography, Stack, IconButton, Divider, Chip, Slider, Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FilterOutlined, CloseOutlined } from '@ant-design/icons';

function ClaimsFilter() {
    const isDesktop = useMediaQuery('(min-width:600px)');

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    function valuetext(value) {
        return `${value}°C`;
    }

    const marks = [
        {
            value: 0,
            label: '0'
        },
        {
            value: 25,
            label: '5K'
        },
        {
            value: 50,
            label: '10K'
        },
        {
            value: 75,
            label: '20K'
        },
        {
            value: 100,
            label: '25K'
        }
    ];

    return (
        <>
            <Button sx={{ maxWidth: '100px' }} variant="outlined" startIcon={<FilterOutlined />} onClick={handleClick}>
                Filter
            </Button>
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
                        width: '300px',
                        padding: '0.5rem'
                    }
                }}
            >
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6">Filter</Typography>
                    <IconButton aria-label="upload picture" component="label" onClick={handleClose}>
                        <CloseOutlined style={{ fontSize: '14px' }} />
                    </IconButton>
                </Stack>
                <Divider />
                <Box sx={{ my: 1.5 }}>
                    <Typography sx={{ mb: 0.5, color: '#A6A6A7' }}>alphabetical order</Typography>
                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        sx={{
                            '.MuiChip-root': {
                                width: '80px !important'
                            }
                        }}
                    >
                        <Chip label="A-Z" variant="outlined" color="primary" />
                        <Chip label="Z-A" variant="outlined" />
                    </Stack>
                </Box>
                <Divider />
                <Box sx={{ my: 1.5 }}>
                    <Typography sx={{ mb: 0.5, color: '#A6A6A7' }}>clime amount</Typography>
                    <Box sx={{ px: '1rem' }}>
                        <Slider defaultValue={[0, 25]} marks={marks} />
                    </Box>
                </Box>
                <Divider />
                <Box sx={{ my: 1.5 }}>
                    <Typography sx={{ mb: 0.5, color: '#A6A6A7' }}>clime status</Typography>
                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        sx={{
                            '.MuiChip-root': {
                                width: '80px !important'
                            }
                        }}
                    >
                        <Chip label="Open" variant="outlined" />
                        <Chip label="Passed" variant="outlined" />
                        <Chip label="Rejected" variant="outlined" />
                    </Stack>
                </Box>
                <Divider />
                <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{
                        my: 1,
                        '.MuiChip-root': {
                            width: '80px !important'
                        }
                    }}
                >
                    <Button>Clear</Button>
                    <Button variant="contained">Apply</Button>
                </Stack>
            </Popover>
        </>
    );
}

export default ClaimsFilter;
