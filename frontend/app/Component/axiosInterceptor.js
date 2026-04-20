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
        // Handle forbidden access (403) - needs server-side redirect
        if(error.response && error.response.status === 403){
            const { message , redirectUrl} = error.response?.data;
            if(notify) notify(message);
            setTimeout(()=> {
                window.location.href = redirectUrl;
            }, 1000);
        }
        // Handle network errors
        else if (error.code === 'ERR_NETWORK') {
            if (notify) notify("Server is down or unreachable");
        }
        // 401 will be handled in NavigationContext, not here
        // This prevents double-handling and infinite redirect loops
        return Promise.reject(error);
    }

)

export default api;