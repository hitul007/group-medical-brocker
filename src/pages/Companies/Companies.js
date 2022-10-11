import { Box, Button, Grid, Link, Stack, Typography } from '@mui/material';
import MainCard from 'components/MainCard';

import { GlobalOutlined, MessageOutlined, PhoneOutlined, PlusOutlined, VerticalLeftOutlined } from '@ant-design/icons';

function Companies() {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h3">Companies</Typography>
                <Button variant="outlined" startIcon={<PlusOutlined />}>
                    Add Companies
                </Button>
            </Box>
            <Grid container rowSpacing={4.5} columnSpacing={2.75}>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard contentSX={{ p: 2.75 }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Company Name </Typography>
                            <Link sx={{ cursor: 'pointer' }}>
                                <VerticalLeftOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Link>
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
                                    <Link sx={{ color: '#919191' }}>www.digiqt.com</Link>
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard contentSX={{ p: 2.75 }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Company Name </Typography>
                            <Link sx={{ cursor: 'pointer' }}>
                                <VerticalLeftOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Link>
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
                                    <Link sx={{ color: '#919191' }}>www.digiqt.com</Link>
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard contentSX={{ p: 2.75 }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Company Name </Typography>
                            <Link sx={{ cursor: 'pointer' }}>
                                <VerticalLeftOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Link>
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
                                    <Link sx={{ color: '#919191' }}>www.digiqt.com</Link>
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard contentSX={{ p: 2.75 }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Company Name </Typography>
                            <Link sx={{ cursor: 'pointer' }}>
                                <VerticalLeftOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Link>
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
                                    <Link sx={{ color: '#919191' }}>www.digiqt.com</Link>
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard contentSX={{ p: 2.75 }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Company Name </Typography>
                            <Link sx={{ cursor: 'pointer' }}>
                                <VerticalLeftOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Link>
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
                                    <Link sx={{ color: '#919191' }}>www.digiqt.com</Link>
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard contentSX={{ p: 2.75 }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Company Name </Typography>
                            <Link sx={{ cursor: 'pointer' }}>
                                <VerticalLeftOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Link>
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
                                    <Link sx={{ color: '#919191' }}>www.digiqt.com</Link>
                                </Typography>
                            </Box>
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <MainCard contentSX={{ p: 2.75 }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Typography variant="h4">Company Name </Typography>
                            <Link sx={{ cursor: 'pointer' }}>
                                <VerticalLeftOutlined style={{ fontSize: '25px', color: '#08c' }} />
                            </Link>
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
                                    <Link sx={{ color: '#919191' }}>www.digiqt.com</Link>
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
