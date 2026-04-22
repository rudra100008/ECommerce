"use client"
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { useNavigation } from "../Context/NavigationContext";
import LoadingSpinner from './LoadingSpinner';

export const RouteGuard = ({ children, requiredRole }) => {
  const router = useRouter();
  const {userData, userLoading, isRedirecting} = useNavigation();
  const [ isAuthenticated, setIsAuthenticated ] = useState(false);

  useEffect(() => {
    // Don't check if we're already redirecting (prevents duplicate redirects)
    if (userLoading || isRedirecting) return;

    if (!userData?.userId) {
      router.push("/login");
      return;
    }

    if(requiredRole && !userData.roles?.includes(requiredRole) ){
      router.push(userData?.roles?.includes("ROLE_ADMIN") ? "/admin" :"/");
    }

    setIsAuthenticated(true);
  }, [userData, userLoading, isRedirecting, requiredRole, router]);


  if(userLoading || !isAuthenticated ) return <LoadingSpinner />

  return <>{children}</>
};
