import React from 'react'
import { Link } from 'react-router-dom'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import ToggleButton from '../components/toggle-button';
import { motion } from 'framer-motion';
import About from '../components/tech/About';
import Projects from '../components/tech/Projects';
import Languages from '../components/tech/Languages';

const TechPage = () => {
  return (
    <motion.div
      className="bg-gray-800 min-h-screen text-white font-mono mt-20"
      initial={{ opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -window.innerWidth, opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <div className="flex pt-20 gap-4">
        <div className="w-1/2 px-5">
          <About />
        </div>
        <div className="w-1/2 px-5">
          <Projects />
          <div className="mt-2">
            <Languages />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TechPage