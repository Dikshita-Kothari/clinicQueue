import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Layout() {
    const user = JSON.parse(localStorage.getItem("user"))
    const role = user.role;
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">ClinicQ</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Dashboard</Link>
                            </li>
                            {role === 'admin' ? (
                                <>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/clinic">Clinic</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/users">Users</Link>
                                </li>
                                </>
                            ) : null}
                            {role === 'doctor' ? (
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/doctor/queue">Today's Queue</Link>
                                </li>
                            ) : null}
                            {role === 'receptionist' ? (
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/queue">daily Queue</Link>
                                </li>
                            ) : null}
                            {role === 'patient' ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/appointents">book appointent</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/prescription">prescription</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/report">reports</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/myappointents">my appointents</Link>
                                    </li>
                                </>
                            ) : null}
                        </ul>

                        <div className="navbar-nav">
                                <Link className="nav-link active btn btn-danger" aria-current="page" to="/logout">LOGOUT</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout
