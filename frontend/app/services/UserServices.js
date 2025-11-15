'use client'
import api from "../Component/axiosInterceptor";
import { useNotification } from "../Context/NotificationContext";

export const fetchCurrentUser = async (success,error)=>{
    try{
      const response = await api.get('/api/user/me')
      console.log("CurrentUser: ",response.data);
      const data = response.data;
      return data;
    }catch(err){
      console.log("CurrenUser: ",err);
      const {message} = err.response?.data;
      if(err.response.data && err.response.status === 401){
        error(message);
        setTimeout(()=>{
           window.location.href = "/login"
        },3000)
      }
      else if(err.response.data && err.response.status === 403){
        error(message)
        setTimeout(()=>{
          window.location.href = "/login"
        },3000)
      }
      throw err;
    }
  }