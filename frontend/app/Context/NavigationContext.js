'use client'
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { fetchCurrentUser } from "../services/UserServices";
import { useNotification } from "./NotificationContext";
import { fetchCurrentAdmin } from './../services/adminServices/AdminServices';
import { useRouter, usePathname } from "next/navigation";
import api from "../component/axiosInterceptor";

const NavigationContext = createContext();

const PUBLIC_ROUTES = ['/login', '/signup', '/forgot-password'];

export function NavigationProvider({ children }) {
    const router = useRouter();
    const pathname = usePathname();
    const [userLoading, setUserLoading] = useState(true);
    const { success, error } = useNotification();
    const [adminData, setAdminData] = useState(null);
    const [isRedirecting, setIsRedirecting] = useState(false); // Prevent multiple redirects
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        profileImageUrl: '',
        roles: [],
        userId: null,
        cartId: null
    });
    const lastPathnameRef = useRef(pathname);
    const hasLoadedAdminRef = useRef(false);
    const hasLoadedUserRef = useRef(false);

    const loadCurrentUser = useCallback(async () => {
        // Prevent multiple simultaneous auth checks
        if (isRedirecting) return;
        
        setUserLoading(true);
        try {
            const data = await fetchCurrentUser(success, error, router);
            if (data) {
                setUserData(data);
                if (data.userId) {
                    localStorage.setItem("userId", data.userId);
                }
                hasLoadedUserRef.current = true;
            }

        } catch (err) {
            console.error('Error loading user:', err);
            
            // If 401 (Unauthorized), clear auth state and redirect to login
            if (err.response?.status === 401) {
                setIsRedirecting(true);
                setUserData({
                    username: '',
                    email: '',
                    profileImageUrl: '',
                    roles: [],
                    userId: null,
                    cartId: null
                });
                localStorage.removeItem('userId');

                error("UnAuthorized Access")
                setTimeout(() => {
                    router.push('/login');
                }, 500);
            } else {
                // For other errors, just clear the user
                setUserData({
                    username: '',
                    email: '',
                    profileImageUrl: '',
                    roles: [],
                    userId: null,
                    cartId: null
                });
            }
        } finally {
            setUserLoading(false);
        }
    }, [success, error, router, isRedirecting]);

    const loadCurrentAdmin = useCallback(async () => {

         if (!userData?.roles?.includes('ROLE_ADMIN')) {
            setAdminData(null);
            return;
        }
        
    
        if (hasLoadedAdminRef.current) {
            return;
        }

        try {
            const data = await fetchCurrentAdmin(error);
            setAdminData(data);
            hasLoadedAdminRef.current = true
        } catch (err) {
            console.log("Error loading admin:", err?.response?.data || err);
            setAdminData(null);
        }
    }, [error,userData?.roles]);


    const isPublicRoute = PUBLIC_ROUTES.includes(pathname);


    useEffect(()=>{
        const wasPublicRoute = PUBLIC_ROUTES.includes(lastPathnameRef.current);
        const isNowPublicRoute = PUBLIC_ROUTES.includes(pathname);
        if(wasPublicRoute && !isNowPublicRoute){
            hasLoadedUserRef.current = false;
            hasLoadedAdminRef.current = false;
        }

        lastPathnameRef.current = pathname;
    })


    useEffect(() => {
        if (isPublicRoute) {
            setUserLoading(false);
            return;
        }
        
        if(!hasLoadedUserRef.current){
            loadCurrentUser();
        }else{
            setUserLoading(false);
        }
    }, [pathname, isPublicRoute, loadCurrentUser]);


     useEffect(() => {
        if (userData?.roles?.includes('ROLE_ADMIN') && 
            !isPublicRoute && 
            !hasLoadedAdminRef.current && 
            !userLoading) {
            loadCurrentAdmin();
        }
    }, [userData?.roles, loadCurrentAdmin, isPublicRoute, userLoading]);

    
    const logout = useCallback(async  () => {
        try{
            await api.post(`/api/auth/logout`);
            success('Logged out successfully.');
            setUserData({username :'', email: '', profileImageUrl:'', roles:[],userId: null, cartId:  null});
            localStorage.removeItem('userId');
            router.push('/login')
        }catch(err){
            console.log("Error in logout: ",err)
            error("Logout Failed.");
        }
    },[success,error,router])

    // Load admin data if user has admin role
    useEffect(() => {
        if (userData?.roles?.includes('ROLE_ADMIN') && !isPublicRoute) {
            loadCurrentAdmin();
        }
    }, [userData?.roles, loadCurrentAdmin, isPublicRoute]);

    const value = {
        userData,
        setUserData,
        loadCurrentUser,
        userLoading,
        setUserLoading,
        adminData,
        setAdminData,
        loadCurrentAdmin,
        isPublicRoute,
        logout,
        isRedirecting
    };

    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider>
    );
}

export const useNavigation = () => {
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error('useNavigation must be used within NavigationProvider');
    }
    return context;
}