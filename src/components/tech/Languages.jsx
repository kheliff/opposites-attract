import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'

const Languages = () => {
    return (
        <Accordion>
            <AccordionSummary
                sx={{ bgcolor: '#111827' }}
                expandIcon={<ExpandMoreIcon className="text-white" />}
            >
                <div className="text-white text-xl">Languages.txt</div>
            </AccordionSummary>
            <AccordionDetails sx={{ bgcolor: '#61697a' }}>
                <ul className="ml-5">
                    <li>C</li>
                    <li>JavaScript</li>
                    <li>html</li>
                    <li>css</li>
                    <li>jsx</li>
                </ul>
            </AccordionDetails>
        </Accordion>
    )
}

export default Languages
