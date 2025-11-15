'use client'
import { createContext, useContext, useEffect, useState } from "react";
import { fetchCurrentUser } from "../services/UserServices";
import Error from "next/error";
import { useNotification } from "./NotificationContext";
const NavigationContext = createContext();

export function NavigationProvider({ children }) {
    const [userLoading,setUserLoading] = useState(false);
    const {success,error} = useNotification();
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        profileImageUrl: '',
        roles: []
    })
    const loadCurrentUser = async () => {
        setUserLoading(true);
        try {
            const data = await fetchCurrentUser(success,error);
           setUserData(data);
        } catch (error) {
            console.error('Error loading user:', error);
        }finally{
            setUserLoading(false);
        };

    }
    const value = {
        userData,
        setUserData,
        loadCurrentUser,
        userLoading,
        setUserLoading
    }
    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider>
    )
}

export const useNavigation  = () => {
    const context = useContext(NavigationContext);
    if(!context){
        throw new Error('useNavigation must be used within NavigationProvider')
    }
    return context;
}