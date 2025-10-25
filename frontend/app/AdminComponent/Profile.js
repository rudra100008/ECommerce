import { useEffect } from 'react';
import style from '../CSS/adminNavbar/profile.module.css'
import {fetchCurrentUser} from '../services/UserServices';
import {useNotification} from '../Context/NotificationContext';
export default function Profile(){
    const {success ,error} = useNotification();
    const fetchAdmin = async () =>{
        try{
        const response = await fetchCurrentUser();
        success("User data fetched")
        }catch(err){
            console.log("Error",err.response?.data)
        }
    }

    useEffect(()=>{
        fetchAdmin();
    },[])
    return(
        <div className={style.container}>
            
        </div>
    )
}