// material-ui
import React, { useState } from 'react';
import { Box, Breadcrumbs, Button, Typography, Tab } from '@mui/material';
import MainCard from 'components/MainCard';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import EmpHead from './EmpHead';
import Information from './Information';
import EmpClaims from './EmpClaims';
import useMediaQuery from '@mui/material/useMediaQuery';

import Claimdialog from 'pages/Claims/Claimsdialog';

function EmployeesDetails() {
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
                    variant="contained"
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
                            <TabPanel value="3">Endorsement</TabPanel>
                        </TabContext>
                    </Box>
                </MainCard>
            </Box>
        </>
    );
}

export default EmployeesDetails;
