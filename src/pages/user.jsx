import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addNew, getAll } from '../services/userService';

function User() {
    const navigate = useNavigate();
    const [all, setAll] = useState(null);
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
        phone: ""
    })
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
        if(JSON.parse(localStorage.getItem("user")).role != "admin"){
            navigate("/")
        }
        getAll().then((res) => {
            setAll(res)
        })
    }, []);
    console.log(all);

    function hadleSubmit(e){
        e.preventDefault();
        addNew(data);
        navigate("/")
    }


    return (
        <div>
            <div className='row m-5'>
                <div className='col-12'>
                    <h1>Add new User</h1>
                    <form className="row g-3" onSubmit={hadleSubmit}>
                        <div className="col-6">
                            <label for="name" className="form-label">Name</label>
                            <input onChange={(e)=>{setData({...data,name:e.target.value})}} type="text" className="form-control" id="name" placeholder="at least 3 character" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Email</label>
                            <input onChange={(e)=>{setData({...data,email:e.target.value})}} type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-4">
                            <label for="inputPassword4" className="form-label">Password</label>
                            <input onChange={(e)=>{setData({...data,password:e.target.value})}} type="password" className="form-control" placeholder='at least 6 characters' id="inputPassword4" />
                        </div>
                        <div className="col-4">
                            <label for="phonenum" className="form-label">Phone num</label>
                            <input onChange={(e)=>{setData({...data,phone:e.target.value})}} type="text" className="form-control" id="phonenum" placeholder="optional" />
                        </div>
                        <div className="col-md-4">
                            <label for="role" className="form-label">Role</label>
                            <select id="role" className="form-select" onChange={(e)=>{setData({...data,role:e.target.value})}}>
                                <option selected>Choose...</option>
                                <option value="doctor">Doctor</option>
                                <option value="patient">Paitient</option>
                                <option value="receptionist">Receptionist</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Add user</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='row m-5'>
                <div className='col-12'>
                    <h1>All Users</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">name</th>
                                <th scope="col">email</th>
                                <th scope="col">role</th>
                                <th scope="col">phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {all?.map((user) => {
                                return (<tr>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>{user.phone}</td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default User
