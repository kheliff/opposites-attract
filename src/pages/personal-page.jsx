import React from 'react'
import { Link } from 'react-router-dom'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ToggleButton from '../components/toggle-button';
import { motion } from 'framer-motion'
import OKC from '../assets/OKC.jpg'
import THEBENDS from '../assets/THEBENDS.jpg'
import guitar from '../assets/guitar.png'
import pokemon from '../assets/pokemon.jpg'
const PersonalPage = () => {
    return (
        <motion.div
            className="bg-yellow-100 relative min-h-screen overflow-hidden text-black font-mono mt-20"
            initial={{ opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: window.innerWidth, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
            <img
                src={pokemon}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
            />
            <div className="p-8 ">
                <div >
                    <div className="bg-yellow-200 p-4 w-65 h-65 ml-5 mt-5">
                        <h2 className="text-5xl font-bold underline">Hobbies</h2>
                        <p className="mt-2 text-2xl">I like:</p>
                        <ul className="list-disc pl-5">
                            <li>Drawing</li>
                            <li>Playing the guitar</li>
                            <li>Listening to music</li>
                            <li>Fishing!</li>
                        </ul>
                    </div>

                    <div className="bg-yellow-200 p-4 w-100 h-65 absolute left-200 top-90">
                        <h2 className="text-5xl font-bold underline mr-5">Artists/Bands i listen to</h2>
                        <ul className="mt-5 list-disc pl-5">
                            <li>Radiohead</li>
                            <li>Queen</li>
                            <li>MF DOOM</li>
                        </ul>
                    </div>
                </div>


                <motion.img
                    animate={{ rotate: [-5, 5, -5] }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    src={guitar}
                    className="absolute top-30 right-20 w-50"
                    alt="guitar"
                />
                <motion.img
                    animate={{ rotate: [-5, 5, -5] }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    src={THEBENDS}
                    className="absolute top-40 left-110 w-45 "
                    alt="THE BENDS"
                />
                <motion.img
                    animate={{ rotate: [-5, 5, -5] }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    src={OKC}
                    className="absolute top-120 left-23 w-50"
                    alt="OK COMPUTER"
                />
            </div>


        </motion.div >
    )
}

export default PersonalPage
