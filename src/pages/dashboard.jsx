import React, {  useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(!token){
            console.log(token)
            navigate("/login");
        }
    },[]);
    return (
        <div>
            <h1>dashboard</h1>
        </div>
    )
}

export default Dashboard
