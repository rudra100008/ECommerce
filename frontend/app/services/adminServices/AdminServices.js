import api from "../../component/axiosInterceptor";

export const fetchCurrentAdmin = async (error) =>{
    try{
        const response  = await api.get('/api/admin/me');
        console.log("Response in AdminServices: ",response.data)
        return response.data;
    }catch(err){
        console.log("error: ",err.response.data);
         const { message, redirectUrl } = err.response?.data;
    if (err.response.data && err.response.status === 401) {
      error(message);
    }
    else if (err.response.data && err.response.status === 403) {
      error(message)
      setTimeout(() => {
        window.location.href = redirectUrl
      }, 3000)
    }
    throw err;
    }
}