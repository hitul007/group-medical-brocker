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
    Typography
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

import InputAdornment from '@mui/material/InputAdornment';

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
        width: '700px',
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
                        <Typography sx={{ fontWeight: '900', fontSize: '20px' }}> New Claim</Typography>
                        <CloseOutlined onClick={handleClose} />
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
                                        justifyContent: 'center',
                                        height: '500px'
                                    }}
                                >
                                    <img src={success} alt=" " />
                                    <Typography sx={{ textalign: 'center', fontWeight: '900', fontSize: '40px' }}>
                                        Claim Successfully Sended.
                                    </Typography>
                                </Box>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Typography sx={{ mt: 2, mb: 1 }}>
                                    {activeStep === 0 ? (
                                        <React.Fragment>
                                            <Box>
                                                <Stack sx={{ paddingTop: '1rem', display: 'flex', flexDirection: 'row', gap: '3rem' }}>
                                                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                                        <FormLabel id="demo-radio-buttons-group-label">Full Name</FormLabel>
                                                        <TextField />
                                                    </Box>
                                                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                                        <FormLabel id="demo-radio-buttons-group-label">Amount </FormLabel>

                                                        <TextField
                                                            id="input-with-icon-textfield"
                                                            InputProps={{
                                                                startAdornment: (
                                                                    <InputAdornment position="start">
                                                                        <CurrencyRupeeIcon />
                                                                    </InputAdornment>
                                                                )
                                                            }}
                                                            variant="outlined"
                                                        />
                                                    </Box>
                                                </Stack>
                                                <Stack sx={{ paddingTop: '1rem', display: 'flex', flexDirection: 'row', gap: '3rem' }}>
                                                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                                        <FormLabel id="demo-radio-buttons-group-label">Insurance Id</FormLabel>
                                                        <TextField />
                                                    </Box>
                                                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                                        <FormLabel id="demo-radio-buttons-group-label">Hospital Name</FormLabel>

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
                                                    <Box sx={{ width: '50%' }}>
                                                        <FormControl sx={{ display: 'flex', flexDirection: 'column' }}>
                                                            <FormLabel id="demo-radio-buttons-group-label">Claim type</FormLabel>
                                                            <RadioGroup
                                                                aria-labelledby="demo-radio-buttons-group-label"
                                                                defaultValue="Cashless"
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
                                                        </FormControl>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
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
                                            </Box>
                                        </React.Fragment>
                                    ) : null}
                                </Typography>
                                <Typography sx={{ mt: 2, mb: 1 }}>
                                    {activeStep === 1 ? (
                                        <React.Fragment>
                                            <Box>
                                                <Stack
                                                    justifyContent="center"
                                                    alignItems="center"
                                                    sx={{ paddingTop: '1rem', height: '300px' }}
                                                >
                                                    <div {...getRootProps({ style })}>
                                                        <TextField {...getInputProps()} />
                                                        <Typography>+ Upload Document</Typography>
                                                        <Typography>.jpeg,.Png,.Pdf</Typography>
                                                    </div>

                                                    <Typography>{files}</Typography>
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
                                                        <FormLabel id="demo-radio-buttons-group-label">Full Name</FormLabel>
                                                        <TextField disabled={true} value="Rajvee Joshi" />
                                                    </Box>
                                                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                                        <FormLabel id="demo-radio-buttons-group-label">Amount</FormLabel>

                                                        <TextField
                                                            id="input-with-icon-textfield"
                                                            InputProps={{
                                                                startAdornment: (
                                                                    <InputAdornment position="start">
                                                                        <CurrencyRupeeIcon />
                                                                    </InputAdornment>
                                                                )
                                                            }}
                                                            variant="outlined"
                                                            value="10,000"
                                                            disabled
                                                        />
                                                    </Box>
                                                </Stack>
                                                <Stack sx={{ paddingTop: '1rem', display: 'flex', flexDirection: 'row', gap: '3rem' }}>
                                                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                                        <FormLabel id="demo-radio-buttons-group-label">Insurance Id</FormLabel>
                                                        <TextField disabled={true} value="Rajvee Joshi" />
                                                    </Box>
                                                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                                        <FormLabel id="demo-radio-buttons-group-label">Hospital Name</FormLabel>

                                                        <TextField value="civil hospital" disabled />
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
                                                    <Box sx={{ width: '50%' }}>
                                                        <FormControl sx={{ display: 'flex', flexDirection: 'column' }}>
                                                            <FormLabel id="demo-radio-buttons-group-label">Claim type</FormLabel>
                                                            <RadioGroup
                                                                aria-labelledby="demo-radio-buttons-group-label"
                                                                defaultValue="Cashless"
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
                                                        </FormControl>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                                        <FormLabel id="demo-radio-buttons-group-label">Hospitalization Date</FormLabel>

                                                        <TextField value="20/12/2022" disabled />
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
                                                        <Box
                                                            sx={{
                                                                display: 'flex',
                                                                backgroundColor: 'primary',
                                                                width: 'max-content',
                                                                padding: '5px',
                                                                backgroundColor: 'lightgray'
                                                            }}
                                                        >
                                                            <Typography>file.png</Typography>
                                                            <Box>
                                                                <CloseOutlined />
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Stack>
                                            </Box>
                                        </React.Fragment>
                                    ) : null}
                                </Typography>

                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: '2rem' }}>
                                    <Button size="large" variant="outlined" disabled={activeStep === 0} onClick={handleBack}>
                                        Back
                                    </Button>
                                    <Box sx={{ flex: '1 1 auto' }} />

                                    <Button size="large" variant="contained" color="primary" onClick={handleNext}>
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
