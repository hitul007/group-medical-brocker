import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box, Breadcrumbs, Button, Tab, Typography } from '@mui/material';
import MainCard from 'components/MainCard';
import React, { useState } from 'react';

import { PlusOutlined } from '@ant-design/icons';
import Claimdialog from 'pages/Claims/Claimsdialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import Claims from './Claims';
import Employees from './Employees';
import Head from './Head';
import Overview from './Overview';
function CompanyDashboard() {
    const [value, setValue] = React.useState('1');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClickOpen = () => {
        setIsModalOpen(true);
    };
    const isDesktop = useMediaQuery('(min-width:600px)');

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'end', mb: 2 }}>
                <Button
                    variant="outlined"
                    fullWidth={isDesktop ? '' : 'true'}
                    startIcon={<PlusOutlined />}
                    onClick={() => handleClickOpen()}
                >
                    Add Claims
                </Button>
                <Claimdialog modalOpen={isModalOpen} setModalOpen={setIsModalOpen}></Claimdialog>
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

export default CompanyDashboard;
