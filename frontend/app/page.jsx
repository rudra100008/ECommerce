'use client'
import { useEffect, useState } from "react";
import Navbar from './Component/Navbar';
import { useRouter } from "next/navigation";
import { fetchCurrentUser } from "./services/UserServices";
export default function Home() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    profileImageUrl: '',
    roles:[]
  })

  const loadCurrentUser = async()=>{
    try{
      const data = await fetchCurrentUser({router});
      
      setUserData(prev => ({...prev,...data}));
    }catch(error){
       console.error('Error loading user:', error);
    };
  
  }
 
  useEffect(() => { 
    loadCurrentUser();
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

        {userData.roles &&
        userData.roles.map((role,key)=>
          (
            <p key={key}> Role: {role.roleName}</p>
          )
        )}
    </div>
  );
}
