'use client'
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { fetchCurrentUser } from "../services/UserServices";
import Error from "next/error";
import { useNotification } from "./NotificationContext";
import { fetchCurrentAdmin } from './../services/adminServices/AdminServices';
import { useRouter } from "next/navigation";

const NavigationContext = createContext();

export function NavigationProvider({ children }) {
    const router = useRouter();
    const [userLoading,setUserLoading] = useState(true);
    const {success,error} = useNotification();
    const [adminData,setAdminData] = useState({});
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        profileImageUrl: '',
        roles: []
    })
    const loadCurrentUser =useCallback( async () => {
        setUserLoading(true);
        try {
            const data = await fetchCurrentUser(success,error,router);
           setUserData(data);
        } catch (error) {
            console.error('Error loading user:', error);
        }finally{
            setUserLoading(false);
        };

    },[success,error,router])
    const loadCurrentAdmin = async () =>{
        try{
            const data = await fetchCurrentAdmin(error);
            setAdminData(data);

        }catch(err){
            console.log("Error: ",err.response.data);
        }
    }
    const value = {
        userData,
        setUserData,
        loadCurrentUser,
        userLoading,
        setUserLoading,
        adminData,
        setAdminData,
        loadCurrentAdmin
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