'use client'
import { useEffect } from "react";
import { useNotification } from "../Context/NotificationContext";
import { setNotifyFunction } from "./axiosInterceptor";


export default function AppInitializer(){
    const {error} = useNotification();

    useEffect(()=>{
        setNotifyFunction(error);
    },[error])

    return null;
}