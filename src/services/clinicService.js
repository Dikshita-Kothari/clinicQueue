import { api } from "./api";
export async function getdata() {
    const res = await api.get("/admin/clinic", {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
        }
    })
    console.log(res);
    
    return res.data;
}