import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import TechPage from '../pages/tech-page'
import PersonalPage from '../pages/personal-page'
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <div className="relative min-h-screen overflow-hidden">
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<TechPage />} />
                    <Route path="/tech" element={<TechPage />} />
                    <Route path="/personal" element={<PersonalPage />} />
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default AnimatedRoutes
