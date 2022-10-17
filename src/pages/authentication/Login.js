import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography, Button, useMediaQuery } from '@mui/material';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import AuthWrapper from './AuthWrapper';

// ================================|| LOGIN ||================================ //

const Login = () => {
    const Ispc = useMediaQuery('(min-width:600px)');

    return (
        <AuthWrapper>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Stack direction="column" alignItems="center" justifyContent="Center" sx={{ textAlign: 'center' }}>
                        <Typography variant={Ispc ? 'h1' : 'h3'}>Group Medical Insurance</Typography>
                        <Typography variant="h6" sx={{ color: '#919191' }}>
                            select user flow
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={12} sx={{ mt: 5 }}>
                    <Button
                        component={Link}
                        to="/broker-portal"
                        variant="outlined"
                        size="large"
                        fullWidth
                        startIcon={<SupervisorAccountOutlinedIcon />}
                    >
                        Broker
                    </Button>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Button
                        component={Link}
                        to="/company-portal"
                        variant="outlined"
                        size="large"
                        fullWidth
                        startIcon={<BusinessOutlinedIcon />}
                    >
                        Company
                    </Button>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Button
                        component={Link}
                        to="/employee-portal"
                        variant="outlined"
                        size="large"
                        fullWidth
                        startIcon={<PersonOutlineOutlinedIcon />}
                    >
                        Employee
                    </Button>
                </Grid>
            </Grid>
        </AuthWrapper>
    );
};

export default Login;
