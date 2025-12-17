import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { fetchCurrentUser } from "../services/UserServices";
import { useNotification } from "../Context/NotificationContext";

export const useAuth = () => {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const { success, error } = useNotification();
  const [redirectUrl, setRedirectUrl] = useState(null);

  const fetchUser = async () => {
    try {
      const user = await fetchCurrentUser(success, error);
      setUser(user);
    } catch (err) {
      if (err.response.data) {
        const { message, redirectUrl } = err.response?.data;
        setUser({});
        if (err.response.status === 403) {
          setRedirectUrl(redirectUrl);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  const hasRole = (role) => {
    return user?.roles?.includes(role);
  };

  return {
    user,
    setUser,
    loading,
    hasRole,
    redirectUrl,
    refresh: fetchUser,
  };
};
