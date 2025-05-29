import { Button, Switch } from '@mui/material'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import React from 'react'


const ToggleButton = ({ isPersonal }) => {
    const navigate = useNavigate();

    const handleChange = () => {
        isPersonal ? navigate("/tech") : navigate("/personal");
    }

    return (
        <div className="flex items-center gap-2">
            <span className="text-blue-500 text-sm font-mono">Click me!</span>
            <Switch
                sx={{
                    '& .MuiSwitch-track': {
                        backgroundColor: '#e5e7eb',
                    },
                }}
                checked={isPersonal}
                onChange={handleChange}
            />
        </div>
    )
}

export default ToggleButton
