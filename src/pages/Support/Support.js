import { Box, Grid, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import MainCard from 'components/MainCard';

import { SearchOutlined } from '@ant-design/icons';
import AnsAccordion from 'components/AnsAccordion ';
import DefaultFAQ from 'components/DefaultFAQ';
import FAQAccordion from 'components/FAQAccordion';
import AddFAQ from './AddFAQ';

function Support() {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h3">Support</Typography>

                <AddFAQ />
            </Box>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6}>
                    <MainCard>
                        <Typography variant="h5">Pending to revert</Typography>
                        <Stack direction="column" spacing={2} sx={{ mt: 2 }}>
                            <FAQAccordion qn="Why do the prices in the shop sometimes change?" />
                            <FAQAccordion qn="Do you accept orders via Phone or E-mail?" />
                            <FAQAccordion qn="Are you on Twitter, Facebook and other social media platforms?" />
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <MainCard>
                        <Typography variant="h5">answered</Typography>
                        <Stack direction="column" spacing={2} sx={{ mt: 2 }}>
                            <AnsAccordion
                                qn="What does LOREM mean?"
                                ans="‘Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document. The text is intentionally unintelligible so that the viewer is not distracted by the content. "
                            />
                            <AnsAccordion
                                qn="Where can in edit my address?"
                                ans="The language is not real Latin and even the first word ‘Lorem’ does not exist. It is said that the lorem ipsum text has been common among typesetters since the 16th century. "
                            />
                        </Stack>
                    </MainCard>
                </Grid>
                <Grid item xs={12} md={12}>
                    <MainCard>
                        <Typography variant="h5">Default added FAQ</Typography>
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
            </Grid>
        </>
    );
}

export default Support;
