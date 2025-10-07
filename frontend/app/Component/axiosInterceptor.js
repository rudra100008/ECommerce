import axios from "axios";
import baseURL from "../baseURl";


const api = axios.create({
    baseURL: baseURL,
    withCredentials:true,
})

api.interceptors.request.use(
    (config)=>{

        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
)

api.interceptors.response.use(
    (response)=>{
        return response;
    },
    (error)=>{
        if(error.response && error.response.status === 401){
            console.log("UnAuthorized Access.")
            window.location.href ="/login";
        }
        return Promise.reject(error);
    }

)

export default api;