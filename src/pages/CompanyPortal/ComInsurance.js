import { Box, Button, Grid, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import MainCard from 'components/MainCard';

import { SearchOutlined, VerticalLeftOutlined } from '@ant-design/icons';
import useMediaQuery from '@mui/material/useMediaQuery';
function ComInsurance() {
    const isDesktop = useMediaQuery('(min-width:600px)');
    return (
        <>
            <Box className="d-flex flex-column d-lg-block d-lg-flex flex-lg-row justify-content-lg-between pt-2  mb-lg-2 mb-2">
                <Typography variant="h3">Insurance</Typography>
                <Box className="d-flex flex-lg-row gap-3 gap-lg-3 flex-column pt-2">
                    {isDesktop ? (
                        <TextField
                            id="outlined-basic"
                            placeholder="Search insurance"
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
                    ) : (
                        <TextField
                            id="outlined-basic"
                            placeholder="Search insurance"
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <SearchOutlined />
                                    </InputAdornment>
                                )
                            }}
                        />
                    )}
                </Box>
            </Box>

            <Grid container rowSpacing={4.5} columnSpacing={2.75}>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <MainCard content sx={{ height: '260px' }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h3">Health Insurance Policy Online</Typography>
                            <Button
                                component="a"
                                href="https://www.google.com/"
                                target="_blank"
                                variant="text"
                                sx={{ marginRight: '-1rem' }}
                            >
                                <VerticalLeftOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>

                        <Box
                            sx={{
                                ul: {
                                    px: 2,
                                    py: 0,
                                    color: '#919191'
                                }
                            }}
                        >
                            <ul>
                                <li>
                                    <Typography>Health Insurance for the Young & the Restless</Typography>
                                </li>
                                <li>
                                    <Typography>Health insurance for the Great Indian Families</Typography>
                                </li>
                                <li>
                                    <Typography>Health Insurance for the Old & the Wise</Typography>
                                </li>
                                <li>
                                    <Typography>Health Insurance for Corporate Hotshots</Typography>
                                </li>
                                <li>
                                    <Typography>Health Insurance for Employees</Typography>
                                </li>
                                <li>
                                    <Typography>Health Insurance for Value Seekers</Typography>
                                </li>
                            </ul>
                        </Box>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <MainCard content sx={{ height: '260px' }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h3">Super Top-up Health Insurance</Typography>
                            <Button
                                component="a"
                                href="https://www.google.com/"
                                target="_blank"
                                variant="text"
                                sx={{ marginRight: '-1rem' }}
                            >
                                <VerticalLeftOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>

                        <Box
                            sx={{
                                ul: {
                                    px: 2,
                                    py: 0,
                                    color: '#919191'
                                }
                            }}
                        >
                            <ul>
                                <li>
                                    <Typography>Increasing medical costs</Typography>
                                </li>
                                <li>
                                    <Typography>Higher Sum Insured</Typography>
                                </li>
                                <li>
                                    <Typography>Greater coverage for seniors & parents</Typography>
                                </li>
                                <li>
                                    <Typography>Savior for the rainy day!</Typography>
                                </li>
                                <li>
                                    <Typography>Lack of benefits in existing plan</Typography>
                                </li>
                                <li>
                                    <Typography>Additional Tax Saving</Typography>
                                </li>
                            </ul>
                        </Box>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <MainCard content sx={{ height: '260px' }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h3">Arogya Sanjeevani Health Insurance</Typography>
                            <Button
                                component="a"
                                href="https://www.google.com/"
                                target="_blank"
                                variant="text"
                                sx={{ marginRight: '-1rem' }}
                            >
                                <VerticalLeftOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>

                        <Box
                            sx={{
                                ul: {
                                    px: 2,
                                    py: 0,
                                    color: '#919191'
                                }
                            }}
                        >
                            <ul>
                                <li>
                                    <Typography>Hospitalization Expenses</Typography>
                                </li>
                                <li>
                                    <Typography>AYUSH</Typography>
                                </li>
                                <li>
                                    <Typography>Cumulative Bonus</Typography>
                                </li>
                                <li>
                                    <Typography>Plastic Surgery and Dental Treatments</Typography>
                                </li>
                                <li>
                                    <Typography>Cataract Surgery</Typography>
                                </li>
                                <li>
                                    <Typography>New Age Treatments</Typography>
                                </li>
                            </ul>
                        </Box>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <MainCard content sx={{ height: '260px' }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h3">MY:HEALTH SURAKSHA</Typography>
                            <Button
                                component="a"
                                href="https://www.google.com/"
                                target="_blank"
                                variant="text"
                                sx={{ marginRight: '-1rem' }}
                            >
                                <VerticalLeftOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>

                        <Box
                            sx={{
                                ul: {
                                    px: 2,
                                    py: 0,
                                    color: '#919191'
                                }
                            }}
                        >
                            <ul>
                                <li>
                                    <Typography>No Medical Test Upto 45 Years</Typography>
                                </li>
                                <li>
                                    <Typography>Free preventive health-checkups: </Typography>
                                </li>
                                <li>
                                    <Typography>Cumulative Bonus</Typography>
                                </li>
                            </ul>
                        </Box>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <MainCard content sx={{ height: '260px' }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h3">OPTIMA SECURE</Typography>
                            <Button
                                component="a"
                                href="https://www.google.com/"
                                target="_blank"
                                variant="text"
                                sx={{ marginRight: '-1rem' }}
                            >
                                <VerticalLeftOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>

                        <Box
                            sx={{
                                ul: {
                                    px: 2,
                                    py: 0,
                                    color: '#919191'
                                }
                            }}
                        >
                            <ul>
                                <li>
                                    <Typography>Secure Benefit</Typography>
                                </li>
                                <li>
                                    <Typography>Plus Benefit </Typography>
                                </li>
                                <li>
                                    <Typography>Restore Benefit</Typography>
                                </li>
                                <li>
                                    <Typography>Protect Benefit</Typography>
                                </li>
                            </ul>
                        </Box>
                    </MainCard>
                </Grid>
            </Grid>
        </>
    );
}

export default ComInsurance;
