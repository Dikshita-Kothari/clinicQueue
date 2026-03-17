import { useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
function Clinic() {
    const [data, sD] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.log(token)
            navigate("/login");
        }
        if (JSON.parse(localStorage.getItem("user")).role != "admin") {
            navigate("/")
        }
        async function getdata() {
            const res = await api.get("/admin/clinic", {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
            sD(JSON.stringify(res.data))

            return res.data;
        }
        getdata()
    }, [])

    const d = JSON.parse(data)
    // console.log(d.name);


    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    {/* <h5 className="card-title">{d.name}</h5> */}
                    {/* <h6 className="card-subtitle mb-2 text-body-secondary">{d.code}</h6> */}
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
            {data}
        </div>
    )
}

export default Clinic
