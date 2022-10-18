import { Accordion, AccordionDetails, AccordionSummary, TextField, Typography, Stack, Avatar, Box } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AnsAccordion(props) {
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
                    <TextField value={props.ans} disabled fullWidth multiline rows={4} placeholder="type answer here..." />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
