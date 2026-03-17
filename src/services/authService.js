import { api } from "./api"

export const loginService = async(data)=>{
    const res = await api.post("/auth/login",data)
    if(!res.data.error){
        localStorage.setItem("token",res.data.token);
        localStorage.setItem("user",JSON.stringify(res.data.user));
    }
    return res;
}

export const logoutService = ()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("user")
}

export const getUser = ()=>{
    return JSON.parse(localStorage.getItem("user"));
}

export const getToken = ()=>{
    return localStorage.getItem("token")
}