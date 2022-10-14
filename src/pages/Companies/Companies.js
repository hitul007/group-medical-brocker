import { Box, Button, Grid, Stack, Typography, TextField, InputAdornment } from '@mui/material';
import MainCard from 'components/MainCard';

import { SearchOutlined, GlobalOutlined, MessageOutlined, PhoneOutlined, PlusOutlined, VerticalLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function Companies() {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h3">Companies</Typography>
                <Stack direction="row" spacing={2}>
                    <TextField
                        id="outlined-basic"
                        placeholder="Search company name"
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
                    <Button variant="outlined" startIcon={<PlusOutlined />}>
                        Add Companies
                    </Button>
                </Stack>
            </Box>
            <Grid container rowSpacing={4.5} columnSpacing={2.75}>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard content>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Digiqt Technolabs</Typography>
                            <Button component={Link} to="/companies/details" variant="text" sx={{ marginRight: '-1rem' }}>
                                <VerticalLeftOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <PhoneOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    +91 97123 00000
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <MessageOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    hr@digiqt.com
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <GlobalOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption">
                                    <Link style={{ color: '#919191', textDecoration: 'none' }}>www.digiqt.com</Link>
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard content>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Company Name </Typography>
                            <Button component={Link} to="/companies/details" variant="text" sx={{ marginRight: '-1rem' }}>
                                <VerticalLeftOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <PhoneOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    +91 97123 00000
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <MessageOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    hr@digiqt.com
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <GlobalOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption">
                                    <Link style={{ color: '#919191', textDecoration: 'none' }}>www.digiqt.com</Link>
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard content>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Company Name </Typography>
                            <Button component={Link} to="/companies/details" variant="text" sx={{ marginRight: '-1rem' }}>
                                <VerticalLeftOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <PhoneOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    +91 97123 00000
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <MessageOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    hr@digiqt.com
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <GlobalOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption">
                                    <Link style={{ color: '#919191', textDecoration: 'none' }}>www.digiqt.com</Link>
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard content>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Company Name </Typography>
                            <Button component={Link} to="/companies/details" variant="text" sx={{ marginRight: '-1rem' }}>
                                <VerticalLeftOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <PhoneOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    +91 97123 00000
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <MessageOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    hr@digiqt.com
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <GlobalOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption">
                                    <Link style={{ color: '#919191', textDecoration: 'none' }}>www.digiqt.com</Link>
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard content>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Company Name </Typography>
                            <Button component={Link} to="/companies/details" variant="text" sx={{ marginRight: '-1rem' }}>
                                <VerticalLeftOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <PhoneOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    +91 97123 00000
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <MessageOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    hr@digiqt.com
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <GlobalOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption">
                                    <Link style={{ color: '#919191', textDecoration: 'none' }}>www.digiqt.com</Link>
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard content>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Company Name </Typography>
                            <Button component={Link} to="/companies/details" variant="text" sx={{ marginRight: '-1rem' }}>
                                <VerticalLeftOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <PhoneOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    +91 97123 00000
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <MessageOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    hr@digiqt.com
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <GlobalOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption">
                                    <Link style={{ color: '#919191', textDecoration: 'none' }}>www.digiqt.com</Link>
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard content>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Company Name </Typography>
                            <Button component={Link} to="/companies/details" variant="text" sx={{ marginRight: '-1rem' }}>
                                <VerticalLeftOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Button>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <PhoneOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    +91 97123 00000
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <MessageOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption" sx={{ color: '#919191' }}>
                                    hr@digiqt.com
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                <GlobalOutlined style={{ fontSize: '16px', color: '#ddd' }} />
                                <Typography variant="caption">
                                    <Link style={{ color: '#919191', textDecoration: 'none' }}>www.digiqt.com</Link>
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
            </Grid>
        </>
    );
}

export default Companies;
