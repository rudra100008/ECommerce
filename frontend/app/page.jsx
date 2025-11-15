'use client'
import { useEffect } from 'react';
import Navbar from './Component/Navbar';
import style from './CSS/mainContent.module.css'
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Navbar/>
      <div className={style.mainContent}>
        main page
      </div>
    
      {/* {userData.roles &&
        userData.roles.map((role, key) =>
        (
          <p key={key}> Role: {role.roleName}</p>
        )
        )} */}
    </div>
  );
}
