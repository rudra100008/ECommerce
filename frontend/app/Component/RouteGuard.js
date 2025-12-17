"use client"
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";

export const RouteGuard = ({ children, requiredRole = null }) => {
  const router = useRouter();
  const { user, loading, hasRole, redirectUrl } = useAuth();

  useEffect(() => {
    if (loading) return;

    if (!user) {
      router.push("/login");
    }

    if (requiredRole && !hasRole(requiredRole)) {
      if (user?.roles?.includes("ROLE_CUSTOMER")) {
        router.push("/");
      } else if (user?.roles?.includes("ROLE_ADMIN")) {
        router.push("/admin");
      }

      return;
    }
  }, [user, loading, requiredRole, router, redirectUrl]);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  if (!user || (requiredRole && !hasRole(requiredRole))) {
    if (user?.roles?.includes("ROLE_CUSTOMER")) {
      return <div>You are not allowed to access admin page</div>
    } else if (user?.roles?.includes("ROLE_ADMIN")) {
      return <div>You are not allowed to access customer page</div>
    }
  }

  return children;
};
