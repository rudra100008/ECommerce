'use client'
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { fetchCurrentUser } from "../services/UserServices";
import { useNotification } from "./NotificationContext";
import { fetchCurrentAdmin } from './../services/adminServices/AdminServices';
import { useRouter, usePathname } from "next/navigation";
import api from "../component/axiosInterceptor";

const NavigationContext = createContext();

// Define public routes that don't need authentication
const PUBLIC_ROUTES = ['/login', '/signup', '/register', '/forgot-password'];

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
                // Use Next.js client-side navigation instead of hard reload
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
        try {
            const data = await fetchCurrentAdmin(error);
            setAdminData(data);
        } catch (err) {
            console.log("Error loading admin:", err?.response?.data || err);
            setAdminData(null);
        }
    }, [error]);

    // Check if current route is public
    const isPublicRoute = PUBLIC_ROUTES.includes(pathname);

    // Reload user auth state on every protected route visit (handles JWT expiration)
    useEffect(() => {
        // Skip loading user on public routes
        if (isPublicRoute) {
            setUserLoading(false);
            return;
        }
        
        loadCurrentUser();
    }, [pathname, isPublicRoute, loadCurrentUser]);
    
    const logout = useCallback(async  () => {
        try{
            await api.get(`/api/auth/logout`);
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