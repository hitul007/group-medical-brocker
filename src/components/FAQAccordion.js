import { Accordion, AccordionDetails, AccordionSummary, Button, Stack, TextField, Typography, Avatar, Box } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';

export default function FAQAccordion(props) {
    return (
        <div>
            <Accordion sx={{ backgroundColor: '#f4f4f4', boxShadow: 'none' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Avatar src={props.profile}></Avatar>
                        <Box>
                            <Typography variant="h5">{props.name}</Typography>
                            <Typography variant="h6" sx={{ color: 'rgb(140, 140, 140)' }}>
                                {props.time}
                            </Typography>
                        </Box>
                    </Stack>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ mb: 2 }}>{props.qn}</Typography>
                    <TextField fullWidth multiline rows={4} placeholder="type answer here..." />
                    <Stack direction="row" justifyContent="end" sx={{ mt: 2 }}>
                        <Button variant="contained" endIcon={<SendIcon />}>
                            Send
                        </Button>
                    </Stack>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
