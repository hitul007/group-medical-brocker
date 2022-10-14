import React, { useMemo } from 'react';
import { Box, Button, Grid, Stack, Dialog, DialogContent, DialogTitle, Typography, TextField, FormLabel } from '@mui/material';
import MainCard from 'components/MainCard';
import { GlobalOutlined, MessageOutlined, PhoneOutlined, PlusOutlined, VerticalLeftOutlined, CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import MenuItem from '@mui/material/MenuItem';
import DialogActions from '@mui/material/DialogActions';
import success from '../../assets/images/icons/successfully.svg';
import Select from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import IconButton from '@mui/material/IconButton';

function Companies() {
    const steps = ['Upload Company Logo', 'Enter Basic Information', 'Enter Insurance Details'];
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const { getRootProps, getInputProps, acceptedFiles, isFocused, isDragAccept, isDragReject } = useDropzone({ noKeyboard: true });
    const files = acceptedFiles.map((file) => <Typography key={file.path}>{file.path}</Typography>);
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
        width: '980px',
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

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [value, setValue] = React.useState(null);
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h3">Companies</Typography>
                <Button variant="outlined" startIcon={<PlusOutlined />} onClick={handleClickOpen}>
                    Add Companies
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
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
                            <Typography variant="h3"> New Company</Typography>
                            <IconButton>
                                <CloseOutlined onClick={handleClose} />
                            </IconButton>
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
                            <Stepper activeStep={activeStep}>
                                {steps.map((label, index) => {
                                    const stepProps = {};
                                    const labelProps = {};

                                    return (
                                        <Step key={label} {...stepProps}>
                                            <StepLabel {...labelProps}>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                            {activeStep === steps.length ? (
                                <React.Fragment>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: '1rem',
                                            justifyContent: 'center',
                                            height: '500px'
                                        }}
                                    >
                                        <img src={success} alt=" " />
                                        <Typography variant="h2" sx={{ textalign: 'center' }}>
                                            Company Successfully Added.
                                        </Typography>
                                    </Box>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <Typography sx={{ mt: 2, mb: 1 }}>
                                        {activeStep === 0 ? (
                                            <React.Fragment>
                                                <Box
                                                    sx={{
                                                        paddingTop: '1rem',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        display: 'flex',
                                                        height: '300px',
                                                        flexDirection: 'column'
                                                    }}
                                                >
                                                    <div {...getRootProps({ style })}>
                                                        <TextField {...getInputProps()} />
                                                        <Typography>+ Upload Document</Typography>
                                                    </div>
                                                    <Typography variant="h4" sx={{ color: 'lightgray' }}>
                                                        .jpg, .pdf, .png
                                                    </Typography>
                                                </Box>
                                            </React.Fragment>
                                        ) : null}
                                    </Typography>
                                    <Typography sx={{ mt: 2, mb: 1 }}>
                                        {activeStep === 1 ? (
                                            <React.Fragment>
                                                <Box>
                                                    <Stack sx={{ paddingTop: '1rem', display: 'flex', flexDirection: 'row', gap: '3rem' }}>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                                            <FormLabel id="demo-radio-buttons-group-label">Company Name</FormLabel>
                                                            <TextField />
                                                        </Box>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                                            <FormLabel id="demo-radio-buttons-group-label">Email </FormLabel>

                                                            <TextField />
                                                        </Box>
                                                    </Stack>
                                                    <Stack sx={{ paddingTop: '1rem', display: 'flex', flexDirection: 'row', gap: '3rem' }}>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                                            <FormLabel id="demo-radio-buttons-group-label">Contact No.</FormLabel>
                                                            <TextField />
                                                        </Box>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                                            <FormLabel id="demo-radio-buttons-group-label">Address</FormLabel>

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
                                                            <FormLabel id="demo-radio-buttons-group-label">Website Url</FormLabel>
                                                            <TextField />
                                                        </Box>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                                            <FormLabel id="demo-radio-buttons-group-label">Director Name</FormLabel>
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
                                                            <FormLabel id="demo-radio-buttons-group-label">Total Employee</FormLabel>
                                                            <TextField />
                                                        </Box>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                                            <FormLabel id="demo-radio-buttons-group-label">Pan No.</FormLabel>
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
                                                            <FormLabel id="demo-radio-buttons-group-label">GST In</FormLabel>
                                                            <TextField />
                                                        </Box>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                                            <FormLabel id="demo-radio-buttons-group-label">TIN</FormLabel>
                                                            <TextField />
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                            </React.Fragment>
                                        ) : null}
                                    </Typography>

                                    <Typography sx={{ mt: 2, mb: 1 }}>
                                        {activeStep === 2 ? (
                                            <React.Fragment>
                                                <Box>
                                                    <Stack sx={{ paddingTop: '1rem', display: 'flex', flexDirection: 'row', gap: '3rem' }}>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                                            <FormLabel id="demo-radio-buttons-group-label">Policy No.</FormLabel>
                                                            <TextField />
                                                        </Box>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                                            <FormLabel id="demo-radio-buttons-group-label">Age</FormLabel>
                                                            <Select
                                                                labelId="demo-simple-select-helper-label"
                                                                id="demo-simple-select-helper"
                                                                value={age}
                                                                label="Age"
                                                                onChange={handleChange}
                                                            >
                                                                <MenuItem value="">
                                                                    <em>None</em>
                                                                </MenuItem>
                                                                <MenuItem value={10}>Ten</MenuItem>
                                                                <MenuItem value={20}>Twenty</MenuItem>
                                                                <MenuItem value={30}>Thirty</MenuItem>
                                                            </Select>
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
                                                            <FormLabel id="demo-radio-buttons-group-label">
                                                                Select Policy start Date
                                                            </FormLabel>
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
                                                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                                            <FormLabel id="demo-radio-buttons-group-label">
                                                                Select Policy End Date
                                                            </FormLabel>
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
                                                    </Stack>
                                                    <Stack sx={{ paddingTop: '1rem' }}>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                            <FormLabel id="demo-radio-buttons-group-label">Claim Details</FormLabel>
                                                            <TextField
                                                                disabled
                                                                multiline
                                                                rows={4}
                                                                value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                                                            />
                                                        </Box>
                                                    </Stack>
                                                    <Stack sx={{ paddingTop: '1rem' }}>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                            <FormLabel id="demo-radio-buttons-group-label">Document</FormLabel>
                                                            <Box>
                                                                <Stack sx={{ paddingTop: '1rem' }}>
                                                                    <div {...getRootProps({ style })}>
                                                                        <TextField {...getInputProps()} />
                                                                        <Typography>+ Upload Document</Typography>
                                                                        <Typography>.jpeg,.Png,.Pdf</Typography>
                                                                    </div>

                                                                    <Box
                                                                        sx={{
                                                                            display: 'flex',
                                                                            backgroundColor: 'primary',
                                                                            width: 'max-content',
                                                                            margin: '5px',
                                                                            backgroundColor: 'lightgray'
                                                                        }}
                                                                    >
                                                                        <Typography variant="h5" padding="2px">
                                                                            file.png
                                                                        </Typography>
                                                                        <Box>
                                                                            <IconButton>
                                                                                <CloseOutlined />
                                                                            </IconButton>
                                                                        </Box>
                                                                    </Box>
                                                                </Stack>
                                                            </Box>
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                            </React.Fragment>
                                        ) : null}
                                    </Typography>
                                    <DialogActions>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'row',

                                                justifyContent: 'space-between',
                                                width: '100%'
                                            }}
                                        >
                                            <Button size="large" variant="outlined" disabled={activeStep === 0} onClick={handleBack}>
                                                Back
                                            </Button>

                                            <Button size="large" variant="contained" color="primary" onClick={handleNext}>
                                                {activeStep === steps.length - 1 ? 'Save' : 'Next'}
                                            </Button>
                                        </Box>
                                    </DialogActions>
                                </React.Fragment>
                            )}
                        </Box>
                    </DialogContent>
                </Dialog>
            </Box>

            <Grid container rowSpacing={4.5} columnSpacing={2.75}>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard content>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Digiqt Technolabs</Typography>
                            <Button component={Link} to="/companies/details" variant="text" sx={{ marginRight: '-1rem' }}>
                                <VerticalLeftOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <PhoneOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    +91 97123 00000
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <MessageOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    hr@digiqt.com
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <GlobalOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption">
                                    <Link style={{ color: '#919191', textDecoration: 'none' }}>www.digiqt.com</Link>
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard content>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Company Name </Typography>
                            <Button component={Link} to="/companies/details" variant="text" sx={{ marginRight: '-1rem' }}>
                                <VerticalLeftOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <PhoneOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    +91 97123 00000
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <MessageOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    hr@digiqt.com
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <GlobalOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption">
                                    <Link style={{ color: '#919191', textDecoration: 'none' }}>www.digiqt.com</Link>
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard content>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Company Name </Typography>
                            <Button component={Link} to="/companies/details" variant="text" sx={{ marginRight: '-1rem' }}>
                                <VerticalLeftOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <PhoneOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    +91 97123 00000
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <MessageOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    hr@digiqt.com
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <GlobalOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption">
                                    <Link style={{ color: '#919191', textDecoration: 'none' }}>www.digiqt.com</Link>
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard content>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Company Name </Typography>
                            <Button component={Link} to="/companies/details" variant="text" sx={{ marginRight: '-1rem' }}>
                                <VerticalLeftOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <PhoneOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    +91 97123 00000
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <MessageOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    hr@digiqt.com
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <GlobalOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption">
                                    <Link style={{ color: '#919191', textDecoration: 'none' }}>www.digiqt.com</Link>
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard content>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Company Name </Typography>
                            <Button component={Link} to="/companies/details" variant="text" sx={{ marginRight: '-1rem' }}>
                                <VerticalLeftOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <PhoneOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    +91 97123 00000
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <MessageOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    hr@digiqt.com
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <GlobalOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption">
                                    <Link style={{ color: '#919191', textDecoration: 'none' }}>www.digiqt.com</Link>
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard content>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Company Name </Typography>
                            <Button component={Link} to="/companies/details" variant="text" sx={{ marginRight: '-1rem' }}>
                                <VerticalLeftOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <PhoneOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    +91 97123 00000
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <MessageOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    hr@digiqt.com
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <GlobalOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption">
                                    <Link style={{ color: '#919191', textDecoration: 'none' }}>www.digiqt.com</Link>
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard content>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Company Name </Typography>
                            <Button component={Link} to="/companies/details" variant="text" sx={{ marginRight: '-1rem' }}>
                                <VerticalLeftOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <PhoneOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    +91 97123 00000
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <MessageOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    hr@digiqt.com
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <GlobalOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption">
                                    <Link style={{ color: '#919191', textDecoration: 'none' }}>www.digiqt.com</Link>
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
            </Grid>
        </>
    );
}

export default Companies;
