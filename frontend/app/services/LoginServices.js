import api from "../Component/axiosInterceptor";

export const logout = async ({router,success})=>{
    try{
        const res = await api.get('/api/auth/logout');
        const {message} = res.data;
        console.log("Logout function:", message);
        success(message)
        setTimeout(()=>{
            router.push("/login")
        },1000)
    }catch(error){
        console.log("Logout Error: ",error)
    }
}
