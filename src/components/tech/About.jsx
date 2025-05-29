import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'

const About = () => {
    return (
        <Accordion >
            <AccordionSummary
                sx={{ bgcolor: '#111827' }}
                expandIcon={<ExpandMoreIcon className="text-white" />}
            >
                <div className="text-white text-xl">About-Me.txt</div>
            </AccordionSummary>
            <AccordionDetails
                sx={{ bgcolor: '#61697a' }}
            >
                <box className="bg-gray-100">
                    <div>I am a second-year UNSW Student doing a Bachelors in Computer Science with a passion for tech, design, and meaningful problem-solving. I'm constantly building, learning, and experimenting — whether it's with code, hardware, or creative projects.
                    </div>
                </box>
            </AccordionDetails>
        </Accordion>
    )
}

export default About
