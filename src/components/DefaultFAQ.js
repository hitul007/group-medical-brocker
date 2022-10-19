import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function DefaultFAQ(props) {
    return (
        <div>
            <Accordion sx={{ backgroundColor: '#f3f3f3', boxShadow: 'none' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography>{props.qn}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>{props.ans}</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
