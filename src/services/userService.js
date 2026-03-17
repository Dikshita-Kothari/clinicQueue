import { api } from "./api"
export const getAll = async () => {
    const res = await api.get("/admin/users", {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
        }
    })
    console.log(res);

    return res.data;
}

export const addNew = async(data) => {
    try{
        console.log(data);
    
    const res = await api.post("/admin/users", data, {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
        }
    })
    console.log(res.error);
    }catch(e){
        console.log(e.response.data);
        
    }


    // return res;
}