import { useRouter } from "next/navigation";
import api from "../Component/axiosInterceptor";

export const logout = async ({router})=>{
    try{
        const res = await api.get('/api/auth/logout');
        const {message} = res.data;
        console.log("Logout function:", message);
        setTimeout(()=>{
            router.push("/login")
        },3000)
    }catch(error){
        console.log("Logout Error: ",error)
    }
}