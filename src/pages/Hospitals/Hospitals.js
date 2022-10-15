import { Box, Button, Grid, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import MainCard from 'components/MainCard';

import { AimOutlined, PlusOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import AddHospitals from './AddHospitals';

function Hospitals() {
    return (
        <>
            <Box className="d-none d-lg-block d-lg-flex flex-lg-row justify-content-lg-between  mb-lg-2 mb-2">
                <Typography variant="h3">Hospitals</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'around', gap: '1rem', alignItems: 'center' }}>
                    <TextField
                        id="outlined-basic"
                        placeholder="Search name or city"
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
                    <AddHospitals />
                </Box>
            </Box>
            <Box className="d-lg-none d-flex flex-column  ">
                <Typography variant="h3">Hospitals</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', mb: 2, mt: 2 }}>
                    <TextField
                        id="outlined-basic"
                        placeholder="Search name or city"
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
                    <AddHospitals />
                </Box>
            </Box>
            <Grid container rowSpacing={4.5} columnSpacing={2.75}>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard content>
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
                    <MainCard content>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Hospital Name</Typography>
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
                    <MainCard content>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Hospital Name</Typography>
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
                    <MainCard content>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Hospital Name</Typography>
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
                    <MainCard content>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Hospital Name</Typography>
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
                    <MainCard content>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Hospital Name</Typography>
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
                    <MainCard content>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Hospital Name</Typography>
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
                    <MainCard content>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Hospital Name</Typography>
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
                    <MainCard content>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Hospital Name</Typography>
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
                    <MainCard content>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Hospital Name</Typography>
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
                    <MainCard content>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Hospital Name</Typography>
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
