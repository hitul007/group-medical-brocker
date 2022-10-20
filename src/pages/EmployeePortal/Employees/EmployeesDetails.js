// material-ui
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box, Tab } from '@mui/material';
import MainCard from 'components/MainCard';
import React from 'react';
import EmpClaims from './EmpClaims';
import EmpHead from './EmpHead';
import EmpPorEndorsement from './EmpPorEndorsement';
import Information from './Information';

function EmployeesDetails() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
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
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <Information />
                            </TabPanel>
                            <TabPanel value="2" sx={{ p: 0 }}>
                                <EmpClaims />
                            </TabPanel>
                            <TabPanel value="3">
                                <EmpPorEndorsement />
                            </TabPanel>
                        </TabContext>
                    </Box>
                </MainCard>
            </Box>
        </>
    );
}

export default EmployeesDetails;
