import { Box, Grid, Stack, Typography } from '@mui/material';
import MainCard from 'components/MainCard';

function Overview() {
    return (
        <>
            <Typography sx={{ color: 'rgb(140, 140, 140)' }}>Insurance</Typography>
            <Box>
                <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
                    <MainCard sx={{ width: 'max-content', pr: 5 }}>
                        <Typography variant="h5">Health Insurance</Typography>
                        <Typography variant="h6" sx={{ color: 'rgb(140, 140, 140)', mt: 1 }}>
                            Policy number
                        </Typography>
                        <Typography variant="h3">
                            <b>00AA15151512223</b>
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'rgb(140, 140, 140)', mt: 1 }}>
                            Valid date
                        </Typography>
                        <Typography variant="h5">00/Oct/2022 (Sunday)</Typography>
                        <Typography variant="h6" sx={{ color: 'rgb(140, 140, 140)', mt: 1 }}>
                            CD balance
                        </Typography>
                        <Typography variant="h5">$ 11,111</Typography>
                    </MainCard>
                    <MainCard sx={{ width: 'max-content', pr: 5 }}>
                        <Typography variant="h5">Health Insurance</Typography>
                        <Typography variant="h6" sx={{ color: 'rgb(140, 140, 140)', mt: 1 }}>
                            Policy number
                        </Typography>
                        <Typography variant="h3">
                            <b>00AA15151512223</b>
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'rgb(140, 140, 140)', mt: 1 }}>
                            Valid date
                        </Typography>
                        <Typography variant="h5">00/Oct/2022 (Sunday)</Typography>
                        <Typography variant="h6" sx={{ color: 'rgb(140, 140, 140)', mt: 1 }}>
                            CD balance
                        </Typography>
                        <Typography variant="h5">$ 11,111</Typography>
                    </MainCard>
                </Stack>

                <Typography sx={{ color: 'rgb(140, 140, 140)', mt: 4, mb: 2 }}>information</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={2}>
                            <Box>
                                <Typography variant="h4">Digiqt Technolabs</Typography>
                                <Typography variant="subtitle2" sx={{ color: 'rgb(140, 140, 140)' }}>
                                    Company name
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="h4">HR@digiqt.com</Typography>
                                <Typography variant="subtitle2" sx={{ color: 'rgb(140, 140, 140)' }}>
                                    Email
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="h4">+91 00000 00000</Typography>
                                <Typography variant="subtitle2" sx={{ color: 'rgb(140, 140, 140)' }}>
                                    Contact No.
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="h4" sx={{ cursor: 'pointer', textDecoration: 'underline' }}>
                                    <a>www.digiqt.com</a>
                                </Typography>
                                <Typography variant="subtitle2" sx={{ color: 'rgb(140, 140, 140)' }}>
                                    Website
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="h4">Hitul Mistry</Typography>
                                <Typography variant="subtitle2" sx={{ color: 'rgb(140, 140, 140)' }}>
                                    Directors
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={2}>
                            <Box>
                                <Typography variant="h4">45</Typography>
                                <Typography variant="subtitle2" sx={{ color: 'rgb(140, 140, 140)' }}>
                                    Total employees
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="h4">AXL00EQK00</Typography>
                                <Typography variant="subtitle2" sx={{ color: 'rgb(140, 140, 140)' }}>
                                    PAN number
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="h4">07AAGFF2194N1Z1</Typography>
                                <Typography variant="subtitle2" sx={{ color: 'rgb(140, 140, 140)' }}>
                                    GST IN
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="h4">22AAABB1111C4Z5</Typography>
                                <Typography variant="subtitle2" sx={{ color: 'rgb(140, 140, 140)' }}>
                                    TIN
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Overview;
