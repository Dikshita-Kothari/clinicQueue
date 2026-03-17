import { React, useEffect,useState } from 'react'
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';
const getAll = async () => {
    const res = await api.get("/appointments/my", {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
        }
    })
    console.log(res);

    return res.data;
}
function Appointments() {
    const navigate = useNavigate();
    const [all, setAll] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.log(token)
            navigate("/login");
        }
        if (JSON.parse(localStorage.getItem("user")).role != "patient") {
            navigate("/")
        }
        getAll().then((res) => {
            setAll(res)
        })
    }, [])
    return (
        <div>
            <div className='row m-5'>
                <div className='col-12'>
                    <h1>my appointent</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">appointmentDate</th>
                                <th scope="col">timeSlot</th>
                                <th scope="col">status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {all?.map((user) => {
                                return (<tr>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.appointmentDate}</td>
                                    <td>{user.timeSlot}</td>
                                    <td>{user.status}</td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Appointments
