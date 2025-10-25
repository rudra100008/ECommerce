'use client'
import api from "../Component/axiosInterceptor";

export const fetchCurrentUser = async ()=>{
    try{
      const response = await api.get('/api/user/me')
      console.log("CurrentUser: ",response.data);
      const data = response.data;

      return {...data};
    }catch(error){
      console.log("CurrenUser: ",error);
      throw error;
    }
  }