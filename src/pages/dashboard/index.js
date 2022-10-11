// material-ui
import { Avatar, Box, Button, Grid, List, ListItemAvatar, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';

// project import
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import MainCard from 'components/MainCard';

// assets
import RecentClaims from './RecentClaims';

// avatar style
const avatarSX = {
    width: 36,
    height: 36,
    fontSize: '1rem'
};

// action style
const actionSX = {
    mt: 0.75,
    ml: 1,
    top: 'auto',
    right: 'auto',
    alignSelf: 'flex-start',
    transform: 'none'
};

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography variant="h5">Dashboard</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <AnalyticEcommerce title="Total Companies" count="200" />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <AnalyticEcommerce title="Total Claims" count="5899" />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
                <AnalyticEcommerce title="Total Insurance" count="450" />
            </Grid>

            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

            {/* row 2 */}
            <Grid item xs={12} md={8} lg={8}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Last Claims</Typography>
                    </Grid>
                </Grid>
                <MainCard content={false} sx={{ mt: 1.5, height: '500px', overFlow: 'hidden' }}>
                    <Box sx={{ pt: 1, pr: 2 }}>
                        {/* <IncomeAreaChart slot={slot} /> */}
                        <RecentClaims />
                    </Box>
                </MainCard>
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Last companies</Typography>
                    </Grid>
                    <Grid item />
                </Grid>
                <MainCard content={false} sx={{ mt: 2, height: '500px', overFlow: 'hidden' }}>
                    <Stack direction="column" justifyContent="space-between" sx={{ height: '100%' }}>
                        <List
                            component="nav"
                            sx={{
                                px: 0,
                                py: 0,
                                '& .MuiListItemButton-root': {
                                    py: 1.5,
                                    '& .MuiAvatar-root': avatarSX,
                                    '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
                                }
                            }}
                        >
                            <ListItemButton divider>
                                <ListItemAvatar>
                                    <Avatar
                                        sx={{
                                            color: 'primary.main',
                                            bgcolor: 'primary.lighter'
                                        }}
                                    >
                                        DT
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<Typography variant="subtitle1">Digiqt Technolabs</Typography>}
                                    secondary="5+ employees"
                                />
                            </ListItemButton>
                            <ListItemButton divider>
                                <ListItemAvatar>
                                    <Avatar
                                        sx={{
                                            color: 'primary.main',
                                            bgcolor: 'primary.lighter'
                                        }}
                                    >
                                        DI
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={<Typography variant="subtitle1">Digiqt</Typography>} secondary="10+ employees" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar
                                        sx={{
                                            color: 'primary.main',
                                            bgcolor: 'primary.lighter'
                                        }}
                                    >
                                        TE
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={<Typography variant="subtitle1">Technolabs</Typography>} secondary="50+ employees" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar
                                        sx={{
                                            color: 'primary.main',
                                            bgcolor: 'primary.lighter'
                                        }}
                                    >
                                        TE
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={<Typography variant="subtitle1">Technolabs</Typography>} secondary="50+ employees" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar
                                        sx={{
                                            color: 'primary.main',
                                            bgcolor: 'primary.lighter'
                                        }}
                                    >
                                        TE
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={<Typography variant="subtitle1">Technolabs</Typography>} secondary="50+ employees" />
                            </ListItemButton>
                        </List>
                        <Button variant="outlined" fullWidth>
                            View all
                        </Button>
                    </Stack>
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default DashboardDefault;
