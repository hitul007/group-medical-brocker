import { Box, Grid, Stack, Typography, IconButton } from '@mui/material';
import MainCard from 'components/MainCard';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

function Overview() {
    return (
        <>
            <Typography sx={{ color: 'rgb(140, 140, 140)', mb: 2 }}>Insurance</Typography>
            <Box>
            <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <MainCard>
                            <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                                <Typography variant="h5">Health Insurance</Typography>
                                <IconButton color="primary">
                                    <SaveAltIcon sx={{ fontSize: '20px' }} />
                                </IconButton>
                            </Stack>
                            <Typography variant="h6" sx={{ color: 'rgb(140, 140, 140)', mt: 1 }}>
                                Policy number
                            </Typography>
                            <Typography variant="h3">
                                <b>0015151512223</b>
                            </Typography>

                            <Typography variant="h6" sx={{ color: 'rgb(140, 140, 140)', mt: 1 }}>
                                Valid date
                            </Typography>
                            <Typography variant="h5">00/Oct/2022 (Sunday)</Typography>
                            <Typography variant="h6" sx={{ color: 'rgb(140, 140, 140)', mt: 1 }}>
                                CD balance
                            </Typography>
                            <Typography variant="h5">$ 20,685</Typography>
                        </MainCard>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <MainCard>
                            <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                                <Typography variant="h5">Health Insurance to Term Insurance</Typography>
                                <IconButton color="primary">
                                    <SaveAltIcon sx={{ fontSize: '20px' }} />
                                </IconButton>
                            </Stack>
                            <Typography variant="h6" sx={{ color: 'rgb(140, 140, 140)', mt: 1 }}>
                                Policy number
                            </Typography>
                            <Typography variant="h3">
                                <b>9885151416447</b>
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
                    </Grid>
                </Grid>

                <Typography sx={{ color: 'rgb(140, 140, 140)', mt: 4, mb: 2 }}>information</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={2}>
                            <Box>
                                <Typography variant="subtitle2" sx={{ color: 'rgb(140, 140, 140)' }}>
                                    Company name
                                </Typography>
                                <Typography variant="h4">Digiqt Technolabs</Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle2" sx={{ color: 'rgb(140, 140, 140)' }}>
                                    Email
                                </Typography>
                                <Typography variant="h4">HR@digiqt.com</Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle2" sx={{ color: 'rgb(140, 140, 140)' }}>
                                    Contact No.
                                </Typography>
                                <Typography variant="h4">+91 00000 00000</Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle2" sx={{ color: 'rgb(140, 140, 140)' }}>
                                    Website
                                </Typography>
                                <Typography variant="h4" sx={{ cursor: 'pointer', textDecoration: 'underline' }}>
                                    <a>www.digiqt.com</a>
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle2" sx={{ color: 'rgb(140, 140, 140)' }}>
                                    Directors
                                </Typography>
                                <Typography variant="h4">Hitul Mistry</Typography>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={2}>
                            <Box>
                                <Typography variant="subtitle2" sx={{ color: 'rgb(140, 140, 140)' }}>
                                    Total employees
                                </Typography>
                                <Typography variant="h4">45</Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle2" sx={{ color: 'rgb(140, 140, 140)' }}>
                                    PAN number
                                </Typography>
                                <Typography variant="h4">AXL00EQK00</Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle2" sx={{ color: 'rgb(140, 140, 140)' }}>
                                    GST IN
                                </Typography>
                                <Typography variant="h4">07AAGFF2194N1Z1</Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle2" sx={{ color: 'rgb(140, 140, 140)' }}>
                                    TIN
                                </Typography>
                                <Typography variant="h4">22AAABB1111C4Z5</Typography>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Overview;
