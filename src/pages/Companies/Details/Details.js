import { Box, Breadcrumbs, Button, Typography, Tab } from '@mui/material';
import MainCard from 'components/MainCard';
import * as React from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Head from './Head';
import Overview from './Overview';
import Employees from './Employees';
import Claims from './Claims';
import Claimdialog from 'pages/Claims/Claimsdialog';
import { useLocation } from 'react-router-dom';
function Details() {
    const location = useLocation();
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link style={{ color: '#919191', textDecoration: 'none' }} to="/companies">
                        Companies
                    </Link>
                    <Typography color="text.primary">Digiqt Technolabs</Typography>
                </Breadcrumbs>
                <Button variant="outlined" startIcon={<PlusOutlined />} onClick={<Claimdialog />}>
                    Add Claims
                </Button>
            </Box>
            <Box>
                <MainCard contentSX={{ p: 2.75 }}>
                    <Head />

                    <Box sx={{ mt: 2 }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="TAB" variant="scrollable" scrollButtons="auto">
                                    <Tab label="Overview" value="1" />
                                    <Tab label="Employees" value="2" />
                                    <Tab label="Claims" value="3" />
                                    <Tab label="Endorsement" value="4" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <Overview />
                            </TabPanel>
                            <TabPanel value="2" sx={{ p: 0 }}>
                                <Employees />
                            </TabPanel>
                            <TabPanel value="3" sx={{ p: 0 }}>
                                <Claims />
                            </TabPanel>
                            <TabPanel value="4">Endorsement</TabPanel>
                        </TabContext>
                    </Box>
                </MainCard>
            </Box>
        </>
    );
}

export default Details;
