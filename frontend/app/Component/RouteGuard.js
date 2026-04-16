"use client"
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
import { useNavigation } from "../Context/NavigationContext";

export const RouteGuard = ({ children, requiredRole }) => {
  const router = useRouter();
  const {userData, userLoading} = useNavigation();

  useEffect(() => {
    if (userLoading) return;

    if (!userData?.userId) {
      router.push("/login");
      return;
    }


    if(requiredRole && !userData.roles?.includes(requiredRole) ){
      router.push(userData?.roles?.include("ROLE_ADMIN") ? "/admin" :"/");
    }
  }, [userData,userLoading,requiredRole]);


  if(userLoading) return <LoadingSpinner />

  return <>{children}</>
};
