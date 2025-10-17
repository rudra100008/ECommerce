import axios from "axios";
import baseURL from "../baseURl";


const api = axios.create({
    baseURL: baseURL,
    withCredentials: true,
})

let notify;
export const setNotifyFunction = (fn) => {
    notify = fn;
}
api.interceptors.request.use(
    (config) => {

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            const message = error.response.data?.message;
            if (notify) notify(message);
            setTimeout(() =>
                window.location.href = "/login", 3000);
        }
        if(error.response && error.response.status === 403){
            const message  = error.response.data?.message;
            const redirectUrl = error.response.data?.redirectUrl;
            if(notify) notify(message);
            setTimeout(()=>
            window.location.href = redirectUrl , 3000);
            
        }
        return Promise.reject(error);
    }

)

export default api;