'use client'
import { useEffect, useState } from 'react';
import style from './CSS/notification.module.css';

import { useNotification } from './Context/NotificationContext';
export default function NotificationBar(){
    const [isClient,setIsClient] = useState(false);
    const {notification,clear} = useNotification();
    useEffect(()=>{
        setIsClient(true);
    },[])
    if(!isClient || !notification )return null;
    if(notification?.message){
        return(
        <div className={style.container}>
            <span>{notification?.message || ''}</span>
            <button onClick={clear}>
                Close
            </button>
        </div>
    )
    }
}