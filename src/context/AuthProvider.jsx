import { createContext, useContext, useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import apiRequest from "@/lib/apiRequest";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const queryClient = useQueryClient();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["checkAuth"],
    queryFn: async () => {
      const res = await apiRequest.get("/auth/checkAuth", {
        withCredentials: true,
      });
      return res.data;
    },
    retry: false,
  });

  useEffect(() => {
    if (data?.user) {
      setUser(data.user);
    } else {
      setUser(null);
    }
  }, [data]);

  const isAuthenticated = !!user;

  const logout = async () => {
    await apiRequest.post("/auth/logout", {}, { withCredentials: true });
    setUser(null);
    refetch();
  };

  const refetchUser = async () => {
    await queryClient.invalidateQueries(["checkAuth"]);
    await refetch();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        isError,
        logout,
        refetchAuth: refetchUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
