import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box, Breadcrumbs, Tab, Typography } from '@mui/material';
import MainCard from 'components/MainCard';
import React from 'react';

import { Link } from 'react-router-dom';
import Claims from './Claims';
import Employees from './Employees';
import Endorsement from './Endorsement';
import Head from './Head';
import Overview from './Overview';
function Details() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link style={{ color: '#919191', textDecoration: 'none' }} to="/broker-portal/companies">
                        Companies
                    </Link>
                    <Typography color="text.primary">Digiqt Technolabs</Typography>
                </Breadcrumbs>
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
                            <TabPanel value="4">
                                <Endorsement />
                            </TabPanel>
                        </TabContext>
                    </Box>
                </MainCard>
            </Box>
        </>
    );
}

export default Details;
