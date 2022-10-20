import { Box, Button, Grid, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import MainCard from 'components/MainCard';

import { AimOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import useMediaQuery from '@mui/material/useMediaQuery';
import AddHospitals from './AddHospitals';
function Hospitals() {
    const isDesktop = useMediaQuery('(min-width:600px)');
    return (
        <>
            <Box className="d-flex flex-column d-lg-flex flex-lg-row justify-content-lg-between gap-3 mb-lg-2 mb-2">
                <Typography variant="h3">Hospitals</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'around', gap: '1rem', alignItems: 'center' }}>
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
                            fullWidth
                        />
                    )}
                    <AddHospitals />
                </Box>
            </Box>

            <Grid container rowSpacing={4.5} columnSpacing={2.75}>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard content sx={{ height: '180px' }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Digiqt Hospital</Typography>
                            <Button
                                component="a"
                                href="https://www.google.co.in/maps/@22.4168315,71.319437,7z"
                                target="_blank"
                                variant="text"
                                sx={{ marginRight: '-1rem' }}
                            >
                                <AimOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <UserOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Dr. Hitul Mistry
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <UserOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Dr. Pankaj Bagia
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <AimOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Ahmedabad, Gujarat
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard content sx={{ height: '180px' }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Karratha Health Campus</Typography>
                            <Button
                                component="a"
                                href="https://www.google.co.in/maps/@22.4168315,71.319437,7z"
                                target="_blank"
                                variant="text"
                                sx={{ marginRight: '-1rem' }}
                            >
                                <AimOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <UserOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Dr. Hitul Mistry
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <UserOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Dr. Pankaj Bagia
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <AimOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Ahmedabad, Gujarat
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard content sx={{ height: '180px' }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Shrinath Clinic</Typography>
                            <Button
                                component="a"
                                href="https://www.google.co.in/maps/@22.4168315,71.319437,7z"
                                target="_blank"
                                variant="text"
                                sx={{ marginRight: '-1rem' }}
                            >
                                <AimOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <UserOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Dr. Hitul Mistry
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <UserOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Dr. Pankaj Bagia
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <AimOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Ahmedabad, Gujarat
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard content sx={{ height: '180px' }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">M Cure hospital</Typography>
                            <Button
                                component="a"
                                href="https://www.google.co.in/maps/@22.4168315,71.319437,7z"
                                target="_blank"
                                variant="text"
                                sx={{ marginRight: '-1rem' }}
                            >
                                <AimOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <UserOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Dr. Hitul Mistry
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <UserOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Dr. Pankaj Bagia
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <AimOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Ahmedabad, Gujarat
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard content sx={{ height: '180px' }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Holy Spirit Private Hospital</Typography>
                            <Button
                                component="a"
                                href="https://www.google.co.in/maps/@22.4168315,71.319437,7z"
                                target="_blank"
                                variant="text"
                                sx={{ marginRight: '-1rem' }}
                            >
                                <AimOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <UserOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Dr. Hitul Mistry
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <UserOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Dr. Pankaj Bagia
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <AimOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Ahmedabad, Gujarat
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard content sx={{ height: '180px' }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Shashvat Hospital</Typography>
                            <Button
                                component="a"
                                href="https://www.google.co.in/maps/@22.4168315,71.319437,7z"
                                target="_blank"
                                variant="text"
                                sx={{ marginRight: '-1rem' }}
                            >
                                <AimOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <UserOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Dr. Hitul Mistry
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <UserOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Dr. Pankaj Bagia
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <AimOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Ahmedabad, Gujarat
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard content sx={{ height: '180px' }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Pragati Clinic</Typography>
                            <Button
                                component="a"
                                href="https://www.google.co.in/maps/@22.4168315,71.319437,7z"
                                target="_blank"
                                variant="text"
                                sx={{ marginRight: '-1rem' }}
                            >
                                <AimOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <UserOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Dr. Hitul Mistry
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <UserOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Dr. Pankaj Bagia
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <AimOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Ahmedabad, Gujarat
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard content sx={{ height: '180px' }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Civil Hospital</Typography>
                            <Button
                                component="a"
                                href="https://www.google.co.in/maps/@22.4168315,71.319437,7z"
                                target="_blank"
                                variant="text"
                                sx={{ marginRight: '-1rem' }}
                            >
                                <AimOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <UserOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Dr. Hitul Mistry
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <UserOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Dr. Pankaj Bagia
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <AimOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Ahmedabad, Gujarat
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard content sx={{ height: '180px' }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Aashirwad Hospital</Typography>
                            <Button
                                component="a"
                                href="https://www.google.co.in/maps/@22.4168315,71.319437,7z"
                                target="_blank"
                                variant="text"
                                sx={{ marginRight: '-1rem' }}
                            >
                                <AimOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <UserOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Dr. Hitul Mistry
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <UserOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Dr. Pankaj Bagia
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <AimOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Ahmedabad, Gujarat
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard content sx={{ height: '180px' }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Aashirwad Hospital</Typography>
                            <Button
                                component="a"
                                href="https://www.google.co.in/maps/@22.4168315,71.319437,7z"
                                target="_blank"
                                variant="text"
                                sx={{ marginRight: '-1rem' }}
                            >
                                <AimOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <UserOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Dr. Hitul Mistry
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <UserOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Dr. Pankaj Bagia
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <AimOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Ahmedabad, Gujarat
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard content sx={{ height: '180px' }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Aashirwad Hospital</Typography>
                            <Button
                                component="a"
                                href="https://www.google.co.in/maps/@22.4168315,71.319437,7z"
                                target="_blank"
                                variant="text"
                                sx={{ marginRight: '-1rem' }}
                            >
                                <AimOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <UserOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Dr. Hitul Mistry
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <UserOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Dr. Pankaj Bagia
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <AimOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    Ahmedabad, Gujarat
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
            </Grid>
        </>
    );
}

export default Hospitals;
