import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box, Tab } from '@mui/material';
import MainCard from 'components/MainCard';
import React from 'react';

import Claims from './Claims';
import ComEndorsement from './ComEndorsement';
import Employees from './Employees';
import Head from './Head';
import Overview from './Overview';
function CompanyDashboard() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
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
                                <ComEndorsement />
                            </TabPanel>
                        </TabContext>
                    </Box>
                </MainCard>
            </Box>
        </>
    );
}

export default CompanyDashboard;
