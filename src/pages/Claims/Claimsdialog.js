import React, { useMemo } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Stack,
    TextField,
    Typography,
    Grid
} from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useDropzone } from 'react-dropzone';
import success from '../../assets/images/icons/successfully.svg';
import DialogActions from '@mui/material/DialogActions';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
const Claimdialog = ({ modalOpen, setModalOpen }) => {
    const steps = ['Basic Information', 'Claim Document', 'Quick Review'];

    const handleClose = () => {
        setModalOpen(false);
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
        borderRadius: 2,
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
    const [value, setValue] = React.useState(null);
    const isDesktop = useMediaQuery('(min-width:600px)');
    return (
        <>
            <Dialog
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={true}
                maxWidth="md"
            >
                <Box>
                    <DialogTitle id="alert-dialog-title" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography variant="h3"> New Claim</Typography>
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
                        gap: '1rem'
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
                                    {isDesktop ? (
                                        <Typography variant="h2" sx={{ textAlign: 'center' }}>
                                            Company Successfully Added.
                                        </Typography>
                                    ) : (
                                        <Typography variant="h4" sx={{ textAlign: 'center' }}>
                                            Company Successfully Added.
                                        </Typography>
                                    )}
                                </Box>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Typography sx={{ mt: 2, mb: 1 }}>
                                    {activeStep === 0 ? (
                                        <React.Fragment>
                                            <Box>
                                                {' '}
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} md={6}>
                                                        <Stack>
                                                            <FormLabel required id="demo-radio-buttons-group-label">
                                                                Full Name
                                                            </FormLabel>
                                                            <TextField />
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Stack>
                                                            <FormLabel id="demo-radio-buttons-group-label">Amount</FormLabel>
                                                            <TextField
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position="start">
                                                                            <CurrencyRupeeIcon />
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                                variant="outlined"
                                                            />
                                                        </Stack>
                                                    </Grid>

                                                    <Grid item xs={12} md={6}>
                                                        <Stack>
                                                            <FormLabel id="demo-radio-buttons-group-label">Hospital Name</FormLabel>
                                                            <TextField />
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Stack>
                                                            <FormLabel required id="demo-radio-buttons-group-label">
                                                                Insurance ID
                                                            </FormLabel>
                                                            <TextField />
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
                                                                <FormControlLabel value="female" control={<Radio />} label="Cashless" />
                                                                <FormControlLabel
                                                                    value="male"
                                                                    control={<Radio />}
                                                                    label="Reimbursement Claims"
                                                                />
                                                            </RadioGroup>
                                                        </Stack>
                                                    </Grid>

                                                    <Grid item xs={12} md={6}>
                                                        <Stack>
                                                            <FormLabel id="demo-radio-buttons-group-label">Hospitalization Date</FormLabel>
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
                                                            <FormLabel required id="demo-radio-buttons-group-label">
                                                                Claims Details
                                                            </FormLabel>
                                                            <TextField multiline rows={4} />
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </React.Fragment>
                                    ) : null}
                                </Typography>
                                <Typography sx={{ mt: 2, mb: 1 }}>
                                    {activeStep === 1 ? (
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
                                    {activeStep === 2 ? (
                                        <React.Fragment>
                                            <Box>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} md={6}>
                                                        <Stack>
                                                            <FormLabel required id="demo-radio-buttons-group-label">
                                                                Full Name
                                                            </FormLabel>
                                                            <TextField disabled />
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Stack>
                                                            <FormLabel id="demo-radio-buttons-group-label">Amount</FormLabel>
                                                            <TextField
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position="start">
                                                                            <CurrencyRupeeIcon />
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                                variant="outlined"
                                                                disabled
                                                            />
                                                        </Stack>
                                                    </Grid>

                                                    <Grid item xs={12} md={6}>
                                                        <Stack>
                                                            <FormLabel id="demo-radio-buttons-group-label">Hospital Name</FormLabel>
                                                            <TextField disabled />
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <Stack>
                                                            <FormLabel required id="demo-radio-buttons-group-label">
                                                                Insurance ID
                                                            </FormLabel>
                                                            <TextField disabled />
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
                                                                <FormControlLabel value="female" control={<Radio />} label="Cashless" />
                                                                <FormControlLabel
                                                                    value="male"
                                                                    control={<Radio />}
                                                                    label="Reimbursement Claims"
                                                                />
                                                            </RadioGroup>
                                                        </Stack>
                                                    </Grid>

                                                    <Grid item xs={12} md={6}>
                                                        <Stack>
                                                            <FormLabel id="demo-radio-buttons-group-label">Hospitalization Date</FormLabel>
                                                            <TextField disabled />
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} md={12}>
                                                        <Stack>
                                                            <FormLabel required id="demo-radio-buttons-group-label">
                                                                Claims Details
                                                            </FormLabel>
                                                            <TextField disabled multiline rows={4} />
                                                        </Stack>
                                                    </Grid>
                                                    <Grid item xs={12} md={12}>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                            <FormLabel id="demo-radio-buttons-group-label">Document</FormLabel>
                                                            <Box
                                                                sx={{
                                                                    display: 'flex',
                                                                    backgroundColor: 'primary',
                                                                    width: 'max-content',
                                                                    padding: '2px',
                                                                    backgroundColor: 'lightgray'
                                                                }}
                                                            >
                                                                <Typography paddingTop="5px" variant="h5">
                                                                    file.png
                                                                </Typography>
                                                                <Box>
                                                                    <IconButton>
                                                                        <CloseOutlined />
                                                                    </IconButton>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
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
        </>
    );
};

export default Claimdialog;
