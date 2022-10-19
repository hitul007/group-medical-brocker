import * as React from 'react';
import { Box, Button, Grid, Stack, TextField, Typography, Snackbar, Alert } from '@mui/material';
import MainCard from 'components/MainCard';
import SendIcon from '@mui/icons-material/Send';
import DefaultFAQ from 'components/DefaultFAQ';
import useMediaQuery from '@mui/material/useMediaQuery';
import PendingAns from 'components/Company/PendingAns';
import AnsFAQ from 'components/Company/AnsFAQ';

function ComSupport() {
    const isDesktop = useMediaQuery('(min-width:600px)');
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h3">Support</Typography>
            </Box>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={12}>
                    <MainCard>
                        <Stack
                            direction={isDesktop ? 'row' : 'column'}
                            justifyContent="space-between"
                            spacing={2}
                            sx={{ margin: 'auto', mb: 5 }}
                        >
                            {isDesktop ? (
                                <TextField sx={{ width: '45%' }} placeholder="Title" />
                            ) : (
                                <TextField fullWidth placeholder="Title" />
                            )}
                            {isDesktop ? (
                                <TextField sx={{ width: '45%' }} placeholder="Description" />
                            ) : (
                                <TextField fullWidth placeholder="Description" />
                            )}
                            {isDesktop ? (
                                <Button variant="contained" endIcon={<SendIcon />} onClick={handleClick}>
                                    Send
                                </Button>
                            ) : (
                                <Button fullWidth variant="contained" endIcon={<SendIcon />} onClick={handleClick}>
                                    Send
                                </Button>
                            )}

                            <Snackbar
                                open={open}
                                autoHideDuration={6000}
                                onClose={handleClose}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            >
                                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                    Quotation Send successfully !
                                </Alert>
                            </Snackbar>
                        </Stack>
                        <Typography variant="h5">FAQ</Typography>
                        <Stack direction="column" spacing={2} sx={{ mt: 2 }}>
                            <DefaultFAQ
                                qn="What does LOREM mean?"
                                ans="‘Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document. The text is intentionally unintelligible so that the viewer is not distracted by the content. "
                            />
                            <DefaultFAQ
                                qn="Where can in edit my address?"
                                ans="The language is not real Latin and even the first word ‘Lorem’ does not exist. It is said that the lorem ipsum text has been common among typesetters since the 16th century. "
                            />
                            <DefaultFAQ
                                qn="What are your opening hours?"
                                ans="No, we don’t have a physical store location at the moment. We accept only orders through our online shop and we’re shipping all orders with the Swiss Post Service. Please visit our  "
                            />
                            <DefaultFAQ
                                qn="Information for Press and Media"
                                ans="Yes, sure. You can change the default currency (Swiss Francs/CHF) to any other currency by scrolling down to the bottom of each page or change it here (please note that the currency will switch back to Swiss Francs/CHF in the checkout due to billing reasons."
                            />
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item md={6} sx={12}>
                    <MainCard>
                        <Typography variant="h5">Pending to reply</Typography>
                        <Stack direction="column" spacing={2} sx={{ mt: 2 }}>
                            <PendingAns
                                title="What does LOREM mean?"
                                time="3 min ago"
                                qn="‘Lorem ipsum dolor sit amet, consectetur adipisici elit…’ "
                            />
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item md={6} sx={12}>
                    <MainCard>
                        <Typography variant="h5">answered</Typography>
                        <Stack direction="column" spacing={2} sx={{ mt: 2 }}>
                            <AnsFAQ
                                title="What does LOREM mean?"
                                time="10 day ago"
                                qn="‘Lorem ipsum dolor sit amet, consectetur adipisici elit…’ "
                                ans="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                            />
                        </Stack>
                    </MainCard>
                </Grid>
            </Grid>
        </>
    );
}

export default ComSupport;
