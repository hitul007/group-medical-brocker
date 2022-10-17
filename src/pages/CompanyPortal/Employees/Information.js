import { Box, Grid, Stack, Typography } from '@mui/material';

function Information() {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={2}>
                        <Box>
                            <Typography variant="subtitle2" sx={{ color: 'rgb(140, 140, 140)' }}>
                                Full name
                            </Typography>

                            <Typography variant="h4">Ravi Fadadu</Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle2" sx={{ color: 'rgb(140, 140, 140)' }}>
                                DOB
                            </Typography>
                            <Typography variant="h4">29/12/2002</Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle2" sx={{ color: 'rgb(140, 140, 140)' }}>
                                Email
                            </Typography>
                            <Typography variant="h4">ravi@digiqt.com</Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle2" sx={{ color: 'rgb(140, 140, 140)' }}>
                                Contact No.
                            </Typography>
                            <Typography variant="h4">+91 00000 00000</Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle2" sx={{ color: 'rgb(140, 140, 140)' }}>
                                Claims
                            </Typography>
                            <Typography variant="h4">5</Typography>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={2}>
                        <Box>
                            <Typography variant="subtitle2" sx={{ color: 'rgb(140, 140, 140)' }}>
                                Aadhar Number
                            </Typography>
                            <Typography variant="h4">1111 2222 3333</Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle2" sx={{ color: 'rgb(140, 140, 140)' }}>
                                PAN number
                            </Typography>
                            <Typography variant="h4">AXL00EQK00</Typography>
                        </Box>
                        <Box
                            sx={{
                                ul: {
                                    p: 0,
                                    m: 0,
                                    pl: 2
                                }
                            }}
                        >
                            <Typography variant="subtitle2" sx={{ color: 'rgb(140, 140, 140)' }}>
                                Has any PED?
                            </Typography>
                            {/* <Typography variant="h4">NO</Typography> */}
                            <ul>
                                <li>
                                    <Typography variant="h4">Kidney stone</Typography>
                                </li>
                                <li>
                                    <Typography variant="h4">ABC 2</Typography>
                                </li>
                            </ul>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Information;
