import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import {
    Box,
    Button,
    FormControlLabel,
    Grid,
    IconButton,
    InputAdornment,
    Radio,
    RadioGroup,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import MainCard from 'components/MainCard';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { Link } from 'react-router-dom';

import Dot from 'components/@extended/Dot';

const OrderStatus = ({ status }) => {
    let color;
    let title;

    switch (status) {
        case 0:
            color = 'warning';
            title = 'Open';
            break;
        case 1:
            color = 'success';
            title = 'Passed';
            break;
        case 2:
            color = 'error';
            title = 'Rejected';
            break;
        default:
            color = 'warning';
            title = 'Open';
    }

    return (
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
            <Dot color={color} />
            <Typography>{title}</Typography>
        </Stack>
    );
};

OrderStatus.propTypes = {
    status: PropTypes.number
};

function ClaimDetails() {
    const [value, setValue] = React.useState(null);

    const isDesktop = useMediaQuery('(min-width:600px)');

    const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({ noKeyboard: true });
    const baseStyle = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderWidth: 2,
        borderColor: '#eeeeee',
        borderStyle: 'solid',
        backgroundColor: '#fafafa',
        color: '#bdbdbd',
        outline: 'none',
        transition: 'border .24s ease-in-out',
        borderRadius: 4,
        width: '100%',
        justifyContent: 'center',
        height: '100%'
    };

    const focusedStyle = {
        borderColor: '#2196f3'
    };

    const acceptStyle = {
        borderColor: '#00e676'
    };

    const rejectStyle = {
        borderColor: '#ff1744'
    };

    const style = useMemo(
        () => ({
            ...baseStyle,
            ...(isFocused ? focusedStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {})
        }),
        [isFocused, isDragAccept, isDragReject]
    );
    return (
        <>
            <Box sx={{ mt: 2 }}>
                <MainCard>
                    <Stack
                        direction={isDesktop ? 'row' : 'column'}
                        justifyContent="space-between"
                        alignItems={isDesktop ? 'center' : 'start'}
                        sx={{ mb: 4 }}
                    >
                        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
                            <IconButton component={Link} to="/company-portal" color="secondary" aria-label="delete">
                                <KeyboardArrowLeftIcon />
                            </IconButton>
                            <Typography variant="h3" className="m-1">
                                Claim Details
                            </Typography>
                        </Stack>
                        <Stack
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                            spacing={2}
                            sx={{ width: isDesktop ? '' : '100%' }}
                        >
                            <Button variant="outlined" fullWidth={isDesktop ? '' : true} startIcon={<EditIcon />}>
                                Edit
                            </Button>
                            <IconButton color="secondary" component="label">
                                <DeleteOutlineIcon />
                            </IconButton>
                        </Stack>
                    </Stack>
                    <Grid container rowSpacing={{ md: 3, xs: 2 }} columnSpacing={{ xs: 3, sm: 2, md: 5 }}>
                        <Grid item xs={6} md={6}>
                            <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2} sx={{ height: '100%' }}>
                                <Typography variant="h5">Claim No. - 9</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
                                <OrderStatus />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack>
                                <Typography sx={{ color: '#8c8c8c' }}>Full name</Typography>
                                <TextField value="Ravi fadadu" disabled></TextField>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack>
                                <Typography sx={{ color: '#8c8c8c' }}>Health Id</Typography>
                                <TextField value="00-1111-2222-3333" disabled></TextField>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack>
                                <Typography sx={{ color: '#8c8c8c' }}>Company Name</Typography>
                                <TextField value="Digiqt Technolabs" disabled></TextField>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack>
                                <Typography sx={{ color: '#8c8c8c' }}>Claim amount</Typography>
                                <TextField
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">₹</InputAdornment>
                                    }}
                                    value="50,000"
                                    disabled
                                ></TextField>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack>
                                <Typography sx={{ color: '#8c8c8c' }}>Policy No</Typography>
                                <TextField value="00AA15151512223" disabled></TextField>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack>
                                <Typography sx={{ color: '#8c8c8c' }}>Claim type</Typography>
                                <RadioGroup
                                    row
                                    defaultValue="Cashless"
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="Cashless" control={<Radio />} label="Cashless" disabled />
                                    <FormControlLabel
                                        value="ReimbursementClaims"
                                        control={<Radio />}
                                        label="Reimbursement Claims"
                                        disabled
                                    />
                                </RadioGroup>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack>
                                <Typography sx={{ color: '#8c8c8c' }}>Hospital name</Typography>
                                <TextField value="Halls Creek Hospital" disabled></TextField>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack>
                                <Typography sx={{ color: '#8c8c8c' }}>Hospitalized date</Typography>
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
                                <Typography sx={{ color: '#8c8c8c' }}>Claims details</Typography>
                                <TextField
                                    multiline
                                    rows={5}
                                    value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
                                    disabled
                                ></TextField>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{ color: '#8c8c8c' }}>Claims document</Typography>
                            <Stack sx={{ mt: 1.5 }}>
                                <div {...getRootProps({ style })}>
                                    <TextField {...getInputProps()} />
                                    <Typography>+ Upload Document</Typography>
                                    <Typography>.jpeg,.Png,.Pdf</Typography>
                                </div>

                                <Box sx={{ mt: 1.5, display: 'grid', gridTemplateColumns: isDesktop ? '1fr 1fr 1fr' : '1fr' }}>
                                    {/* <Typography sx={{ color: '#8c8c8c' }}>{files}</Typography> */}
                                    <Typography sx={{ color: '#8c8c8c' }}>report-1.pdf</Typography>
                                    <Typography sx={{ color: '#8c8c8c' }}>Bill File-1.png</Typography>
                                    <Typography sx={{ color: '#8c8c8c' }}>Bill File-2.png</Typography>
                                    <Typography sx={{ color: '#8c8c8c' }}>Bill File-3.jpeg</Typography>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </MainCard>
            </Box>
        </>
    );
}

export default ClaimDetails;
