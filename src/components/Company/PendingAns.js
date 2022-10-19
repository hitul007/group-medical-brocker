import { Accordion, AccordionDetails, AccordionSummary, Typography, Stack } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function PendingAns(props) {
    return (
        <div>
            <Accordion sx={{ backgroundColor: '#f3f3f3', boxShadow: 'none' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Stack>
                        <Typography>{props.title}</Typography>
                        <Typography variant="h6" sx={{ color: 'rgb(140, 140, 140)', fontSize: '10px' }}>
                            {props.time}
                        </Typography>
                    </Stack>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>{props.qn}</Typography>
                    <Typography sx={{ color: '#6f6f6f', mt: 1 }}>ans ??</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
