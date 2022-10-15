import {
    CloseOutlined,
    GlobalOutlined,
    MessageOutlined,
    PhoneOutlined,
    PlusOutlined,
    SearchOutlined,
    VerticalLeftOutlined
} from '@ant-design/icons';
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    FormLabel,
    Grid,
    InputAdornment,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import MainCard from 'components/MainCard';
import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { Link } from 'react-router-dom';
import success from '../../assets/images/icons/successfully.svg';

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

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [value, setValue] = React.useState(null);
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h3">Companies</Typography>
                <Stack direction="row" spacing={2}>
                    <TextField
                        id="outlined-basic"
                        placeholder="Search company name"
                        variant="outlined"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <SearchOutlined />
                                </InputAdornment>
                            )
                        }}
                        sx={{ maxWidth: '250px' }}
                    />
                    <Button variant="outlined" startIcon={<PlusOutlined />} onClick={handleClickOpen}>
                        Add Companies
                    </Button>
                </Stack>
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
                                                <Stack justifyContent="center" alignItems="center" direction="row">
                                                    <Stack sx={{ paddingTop: '1rem', height: '300px', width: '700px' }}>
                                                        <div {...getRootProps({ style })}>
                                                            <TextField {...getInputProps()} />
                                                            <Typography>+ Upload Document</Typography>
                                                            <Typography>.jpeg,.Png,.Pdf</Typography>
                                                        </div>

                                                        <Typography>{files}</Typography>
                                                    </Stack>
                                                </Stack>
                                            </React.Fragment>
                                        ) : null}
                                    </Typography>
                                    <Typography sx={{ mt: 2, mb: 1 }}>
                                        {activeStep === 1 ? (
                                            <React.Fragment>
                                                {' '}
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} md={6}>
                                                        <Stack>
                                                            <FormLabel required id="demo-radio-buttons-group-label">
                                                                Company Name
                                                            </FormLabel>
                                                            <TextField />
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

                                                    <Grid item xs={12} md={6}>
                                                        <Stack>
                                                            <FormLabel id="demo-radio-buttons-group-label">Contact to</FormLabel>
                                                            <TextField />
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Stack>
                                                            <FormLabel id="demo-radio-buttons-group-label">Address</FormLabel>
                                                            <TextField />
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Stack>
                                                            <FormLabel id="demo-radio-buttons-group-label">Website Url</FormLabel>
                                                            <TextField />
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Stack>
                                                            <FormLabel id="demo-radio-buttons-group-label">Director Name</FormLabel>
                                                            <TextField />
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Stack>
                                                            <FormLabel id="demo-radio-buttons-group-label">Total Employees</FormLabel>
                                                            <TextField />
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Stack>
                                                            <FormLabel id="demo-radio-buttons-group-label">Pan No.</FormLabel>
                                                            <TextField />
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Stack>
                                                            <FormLabel id="demo-radio-buttons-group-label">GST No.</FormLabel>
                                                            <TextField />
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Stack>
                                                            <FormLabel id="demo-radio-buttons-group-label">TIN</FormLabel>
                                                            <TextField />
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            </React.Fragment>
                                        ) : null}
                                    </Typography>

                                    <Typography sx={{ mt: 2, mb: 1 }}>
                                        {activeStep === 2 ? (
                                            <React.Fragment>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} md={6}>
                                                        <Stack>
                                                            <FormLabel id="demo-radio-buttons-group-label">Policy No.</FormLabel>
                                                            <TextField />
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Stack>
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
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Stack>
                                                            {' '}
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
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Stack>
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
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} md={12}>
                                                        <Stack>
                                                            <FormLabel id="demo-radio-buttons-group-label">
                                                                Upload Policy Document
                                                            </FormLabel>
                                                            <Stack justifyContent="center" alignItems="center" direction="row">
                                                                <Stack sx={{ paddingTop: '1rem', height: '300px', width: '700px' }}>
                                                                    <div {...getRootProps({ style })}>
                                                                        <TextField {...getInputProps()} />
                                                                        <Typography>+ Upload Document</Typography>
                                                                        <Typography>.jpeg,.Png,.Pdf</Typography>
                                                                    </div>
                                                                </Stack>
                                                            </Stack>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} md={12}>
                                                        <Box
                                                            sx={{
                                                                display: 'flex',
                                                                backgroundColor: 'primary',
                                                                width: 'max-content',
                                                                margin: '5px',
                                                                backgroundColor: 'lightgray'
                                                            }}
                                                        >
                                                            <Typography variant="h5" padding="5px">
                                                                file.png
                                                            </Typography>
                                                            <Box>
                                                                <IconButton>
                                                                    <CloseOutlined />
                                                                </IconButton>
                                                            </Box>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </React.Fragment>
                                        ) : null}
                                    </Typography>
                                </React.Fragment>
                            )}
                        </Box>
                    </DialogContent>
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
                </Dialog>
            </Box>

            <Grid container rowSpacing={4.5} columnSpacing={2.75}>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard content>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Digiqt Technolabs</Typography>
                            <Button component={Link} to="/broker-portal/companies/details" variant="text" sx={{ marginRight: '-1rem' }}>
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
