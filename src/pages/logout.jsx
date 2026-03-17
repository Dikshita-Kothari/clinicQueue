import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { logoutService } from '../services/authService';

function Logout() {
    const navigate = useNavigate();
    useEffect(() => {
        logoutService()
        navigate("/")
    }, [])

    return (
        <div>

        </div>
    )
}

export default Logout
