'use client'
import { useEffect, useState } from "react";
import Navbar from './Component/Navbar';
import api from "./Component/axiosInterceptor";
import Image from "next/image";
export default function Home() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    profileImageUrl: ''
  })
  const fetchUserDetials = async () => {
    try {
      const response = await api.get('/api/user/fetchUser/15')
      console.log("Home data: ", response.data);
     
    } catch (error) {
      console.log("Home Error: ", error)
    }
  }

  const fetchCurrentUser = async ()=>{
    try{
      const response = await api.get('/api/user/me')
      console.log("CurrentUser: ",response.data);
      const data = response.data;
      let profileImageUrl  = data.profileImageUrl ;
      if(profileImageUrl && !profileImageUrl.startsWith("http")){
        profileImageUrl = '';
      }
      setUserData(prevUser => ({ ...prevUser, ...data }))
    }catch(error){
      console.log("CurrenUser: ",error);
    }
  }
  useEffect(() => {
    fetchCurrentUser();
  }, [])
  return (
    <div>
      <Navbar />
      <div>
       Email: {userData.email}
      </div>
      <div>
         Username : {userData.username }
      </div>
      <p>Image Url: <span>{userData.profileImageUrl}</span></p>
      {/* {
        userData.profileImageUrl &&
        <Image
          src={userData.profileImageUrl}
          alt={userData.username || "profile.jpg"}
          width={96}
          height={96}
        />} */}
    </div>
  );
}
