import React, { useMemo, useState } from 'react';
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Box,
    Typography,
    TextField,
    Stack,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
    FormLabel
} from '@mui/material';
import { CloseOutlined, CheckCircleOutlined } from '@ant-design/icons';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import success from '../../assets/images/icons/successfully.svg';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDropzone } from 'react-dropzone';
const Claimdialog = () => {
    const [state, setState] = React.useState({
        open: false
    });
    const steps = ['Basic Information', 'Claim Document', 'Quick Review'];

    const NotaskClickOpen = () => {
        setState((prevState) => ({ ...prevState, open: true }));
    };

    const NotaskhandleClose = () => {
        setState((prevState) => ({ ...prevState, open: false }));
    };

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

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
        borderRadius: 4
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
    return (
        <>
            <Button variant="outlined" onClick={NotaskClickOpen}>
                claim
            </Button>

            <Dialog
                open={state.open}
                onClose={NotaskhandleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{
                    '& .MuiDialog-container': {
                        '& .MuiPaper-root': {
                            width: '70%',
                            maxWidth: 'xl' // Set your width here
                        }
                    }
                }}
            >
                <Box>
                    <DialogTitle id="alert-dialog-title" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontWeight: '900', fontSize: '20px' }}> New Claim</Typography>
                        <CloseOutlined onClick={NotaskhandleClose} />
                    </DialogTitle>
                </Box>
                <DialogContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '3rem'
                    }}
                >
                    <Box>
                        <Stepper activeStep={activeStep}>
                            {steps.map((label, index) => {
                                const stepProps = {};
                                const labelProps = {};
                                /*  if (isStepOptional(index)) {
                                        labelProps.optional = <Typography variant="caption">Optional</Typography>;
                                    }
                                    if (isStepSkipped(index)) {
                                        stepProps.completed = false;
                                    }*/
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
                                        marginBottom: '1rem'
                                    }}
                                >
                                    <img src={success} alt=" " />
                                    <Typography sx={{ textalign: 'center', fontWeight: '900', fontSize: '35px' }}>
                                        Claim Successfully Sended
                                    </Typography>
                                </Box>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {/*    <Box>
                                    <Stack sx={{ paddingTop: '1rem', display: 'flex', flexDirection: 'row', gap: '3rem' }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', '& .MuiTextField-root': { width: '40ch' } }}>
                                            <FormLabel id="demo-radio-buttons-group-label">Full Name</FormLabel>
                                            <TextField width="100%" />
                                        </Box>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', '& .MuiTextField-root': { width: '40ch' } }}>
                                            <FormLabel id="demo-radio-buttons-group-label">Hospital Name</FormLabel>

                                            <TextField />
                                        </Box>
                                    </Stack>
                                    <Stack
                                        sx={{ paddingTop: '1rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
                                    >
                                        <Box>
                                            <FormControl sx={{ display: 'flex', flexDirection: 'column' }}>
                                                <FormLabel id="demo-radio-buttons-group-label">Claim type</FormLabel>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue="Cashless"
                                                    name="radio-buttons-group"
                                                    sx={{ display: 'flex', flexDirection: 'row' }}
                                                >
                                                    <FormControlLabel value="female" control={<Radio />} label="Cashless" />
                                                    <FormControlLabel value="male" control={<Radio />} label="Reimbursement Claims" />
                                                </RadioGroup>
                                            </FormControl>
                                        </Box>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', '& .MuiTextField-root': { width: '40ch' } }}>
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
                                        </Box>
                                    </Stack>
                                    <Stack sx={{ paddingTop: '1rem' }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <FormLabel id="demo-radio-buttons-group-label">Claim Details</FormLabel>
                                            <TextField multiline rows={4} />
                                        </Box>
                                    </Stack>
                                                </Box>*/}
                                <Box>
                                    <Stack sx={{ paddingTop: '1rem' }}>
                                        <div {...getRootProps({ style })}>
                                            <TextField {...getInputProps()} />
                                            <Typography>+ Upload Document</Typography>
                                            <Typography>.jpeg,.Png,.Pdf</Typography>
                                        </div>

                                        <Typography>{files}</Typography>
                                    </Stack>
                                </Box>
                                {/*  <Box>
                                    <Stack sx={{ paddingTop: '1rem', display: 'flex', flexDirection: 'row', gap: '3rem' }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', '& .MuiTextField-root': { width: '40ch' } }}>
                                            <FormLabel id="demo-radio-buttons-group-label">Full Name</FormLabel>
                                            <TextField disabled={true} value="Rajvee Joshi" />
                                        </Box>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', '& .MuiTextField-root': { width: '40ch' } }}>
                                            <FormLabel id="demo-radio-buttons-group-label">Hospital Name</FormLabel>

                                            <TextField disabled />
                                        </Box>
                                    </Stack>
                                    <Stack
                                        sx={{ paddingTop: '1rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
                                    >
                                        <Box>
                                            <FormControl
                                                sx={{ display: 'flex', flexDirection: 'column', '& .MuiTextField-root': { width: '40ch' } }}
                                            >
                                                <FormLabel id="demo-radio-buttons-group-label">Claim type</FormLabel>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue="Cashless"
                                                    name="radio-buttons-group"
                                                    sx={{ display: 'flex', flexDirection: 'row' }}
                                                >
                                                    <FormControlLabel value="female" control={<Radio />} label="Cashless" />
                                                    <FormControlLabel value="male" control={<Radio />} label="Reimbursement Claims" />
                                                </RadioGroup>
                                            </FormControl>
                                        </Box>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', '& .MuiTextField-root': { width: '40ch' } }}>
                                            <FormLabel id="demo-radio-buttons-group-label">Hospitalization Date</FormLabel>

                                            <TextField disabled />
                                        </Box>
                                    </Stack>
                                    <Stack sx={{ paddingTop: '1rem' }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <FormLabel id="demo-radio-buttons-group-label">Claim Details</FormLabel>
                                            <TextField disabled multiline rows={4} />
                                        </Box>
                                    </Stack>
                                    <Stack sx={{ paddingTop: '1rem' }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <FormLabel id="demo-radio-buttons-group-label">Document</FormLabel>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    backgroundColor: 'lightgray',
                                                    width: 'max-content',
                                                    padding: '5px'
                                                }}
                                            >
                                                <Typography>file.png</Typography>
                                                <Box>
                                                    <CloseOutlined />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Stack>
                                            </Box>*/}
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: '5rem' }}>
                                    <Button
                                        variant="outlined"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ mr: 1, color: 'black', borderColor: 'black' }}
                                    >
                                        Back
                                    </Button>
                                    <Box sx={{ flex: '1 1 auto' }} />

                                    <Button sx={{ color: 'black', backgroundColor: 'lightgray' }} onClick={handleNext}>
                                        {activeStep === steps.length - 1 ? 'Save' : 'Next'}
                                    </Button>
                                </Box>
                            </React.Fragment>
                        )}
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Claimdialog;
