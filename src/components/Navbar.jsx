import React from 'react'
import { useLocation } from 'react-router-dom'
import ToggleButton from '../components/toggle-button'
import Avatar from '@mui/material/Avatar'
import GeekedOut from '../assets/geeked-out.jpg'
import LockedIn from '../assets/locked-in.jpg'
import { motion } from 'framer-motion';
import LinkButton from './LinkButton'


const Navbar = () => {
    const location = useLocation()
    const isPersonal = location.pathname === "/personal"
    const color = isPersonal ? '#facc15' : '#111827';

    return (
        <motion.nav
            className="fixed top-0 left-0 w-full z-50 p-4 h-20 flex items-center justify-between"
            initial={{ backgroundColor: color }}
            animate={{ backgroundColor: color }}
            transition={{ duration: 0.4 }}
        >
            <Avatar alt={isPersonal ? 'geeked' : 'locked'} src={isPersonal ? GeekedOut : LockedIn} />
            <LinkButton href="https://www.linkedin.com/in/cliffhervenlee">My LinkedIn</LinkButton>
            <ToggleButton isPersonal={isPersonal} />
        </motion.nav>
    )

}


export default Navbar
