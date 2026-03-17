import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginService } from '../services/authService';

function Login() {
    
    const [data,setData] = useState({email: "",password: ""});
    const navigate = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(data);
        await loginService(data)
        navigate("/");
    }

    return (
        <>
            <div className='row justify-content-center vh-100 bg-dark '>
                <div className='col-4  align-self-center border p-5 rounded bg-dark-subtle text-center'>
                    <h1 className='border-bottom mb-5 text-primary fs-1 fw-bold'>Clinic Queue</h1>
                    <form className='text-center' onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label fs-3 fw-bold">Email address</label>
                            <input type="email" onChange={(e)=>{setData({...data,email: e.target.value})}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label  fs-3 fw-bold">Password</label>
                            <input type="password" onChange={(e)=>{setData({...data,password: e.target.value})}} className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary fw-bold text-dark">Submit</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login
