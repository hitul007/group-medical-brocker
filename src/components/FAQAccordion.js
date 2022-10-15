import { Accordion, AccordionDetails, AccordionSummary, Button, Stack, TextField, Typography } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';

export default function FAQAccordion(props) {
    return (
        <div>
            <Accordion sx={{ backgroundColor: '#fafafb', boxShadow: 'none' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography>{props.qn}</Typography>
                </AccordionSummary>
                <AccordionDetails>
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
