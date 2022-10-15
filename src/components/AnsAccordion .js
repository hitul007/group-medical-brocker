import { Accordion, AccordionDetails, AccordionSummary, TextField, Typography } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AnsAccordion(props) {
    return (
        <div>
            <Accordion sx={{ backgroundColor: '#fafafb', boxShadow: 'none' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography>{props.qn}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TextField value={props.ans} disabled fullWidth multiline rows={4} placeholder="type answer here..." />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
