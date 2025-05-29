import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'

const Projects = () => {
    return (
        <Accordion>
            <AccordionSummary
                sx={{ bgcolor: '#111827' }}
                expandIcon={<ExpandMoreIcon className="text-white" />}
            >
                <div className="text-white text-xl">Projects.txt</div>
            </AccordionSummary>
            <AccordionDetails sx={{ bgcolor: '#61697a' }}>
                <ul className="ml-5">
                    <li>
                        No projects yet :(
                    </li>
                </ul>
            </AccordionDetails>
        </Accordion>
    )
}

export default Projects
