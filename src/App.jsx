import React from 'react'
import { BrowserRouter, createBrowserRouter, Routes } from 'react-router-dom'
import AnimatedRoutes from './components/AnimatedRoutes.jsx'
import Navbar from './components/Navbar.jsx'
const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <AnimatedRoutes />
        </BrowserRouter>
    )
}

export default App
