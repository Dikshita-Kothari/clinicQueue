import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
function Bookings() {
    const navigate = useNavigate();
    const [data, setData] = useState({ appointmentDate: "", timeSlot: "" })
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.log(token)
            navigate("/login");
        }
        if (JSON.parse(localStorage.getItem("user")).role != "patient") {
            navigate("/")
        }
    }, [])
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            console.log(data);

            const res = await api.post("/appointments", data, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
            console.log(res.error);
        } catch (e) {
            console.log(e.response.data);

        }
        navigate("/")
    }

    return (
        <div>
            <div className='row justify-content-center vh-100 bg-dark '>
                <div className='col-4  align-self-center border p-5 rounded bg-dark-subtle text-center'>
                    <h1 className='border-bottom mb-5 text-primary fs-1 fw-bold'>Clinic Queue</h1>
                    <form className='text-center' onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label fs-3 fw-bold">Email address</label>
                            <input type="date" onChange={(e) => { setData({ ...data, appointmentDate: e.target.value }) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="col-md-4">
                            <label for="role" className="form-label">Role</label>
                            <select id="role" className="form-select" onChange={(e) => { setData({ ...data, timeSlot: e.target.value }) }}>
                                <option selected>Choose...</option>
                                <option value="00:00-00:15">00:00-00:15</option>
                                <option value="00:15-00:30">00:15-00:30</option>
                                <option value="00:30-00:45">00:30-00:45</option>
                                <option value="00:45-01:00">00:45-01:00</option>
                                <option value="01:00-01:1">01:00-01:15</option>
                                <option value="01:15-01:30">01:15-01:30</option>
                                <option value="01:30-01:45">01:30-01:45</option>
                                <option value="01:45-02:00">01:45-02:00</option>
                                <option value="02:00-02:15">02:00-02:15</option>
                                <option value="02:15-02:30">02:15-02:30</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary fw-bold text-dark">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Bookings
