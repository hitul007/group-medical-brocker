// material-ui
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box, Breadcrumbs, Tab, Typography } from '@mui/material';
import MainCard from 'components/MainCard';
import React from 'react';

import { Link } from 'react-router-dom';
import EmpClaims from './EmpClaims';
import EmpHead from './EmpHead';
import Information from './Information';

import EmpEndorsement from './EmpEndorsement';

function EmployeesDetails() {
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
                    <Link style={{ color: '#919191', textDecoration: 'none' }} to="/broker-portal/companies/details">
                        Digiqt Technolabs
                    </Link>
                    <Typography color="text.primary">Employees</Typography>
                </Breadcrumbs>
            </Box>
            <Box>
                <MainCard contentSX={{ p: 2.75 }}>
                    <EmpHead />

                    <Box sx={{ mt: 2 }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="TAB" variant="scrollable" scrollButtons="auto">
                                    <Tab label="Information" value="1" />
                                    <Tab label="Claims" value="2" />
                                    <Tab label="Endorsement" value="3" />
                                    {/* <Tab label="Endorsement" value="4" /> */}
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <Information />
                            </TabPanel>
                            <TabPanel value="2" sx={{ p: 0 }}>
                                <EmpClaims />
                            </TabPanel>
                            <TabPanel value="3">
                                <EmpEndorsement />
                            </TabPanel>
                        </TabContext>
                    </Box>
                </MainCard>
            </Box>
        </>
    );
}

export default EmployeesDetails;
