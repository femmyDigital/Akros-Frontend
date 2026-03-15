import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthProvider";

export default function CheckAuth({ children }) {
  const { user, isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) return null;

  const isAuthPage =
    location.pathname.includes("/login") ||
    location.pathname.includes("/signup");

  if (!isAuthenticated && !isAuthPage) {
    return <Navigate to="/auth/login" />;
  }

  if (isAuthenticated && isAuthPage) {
    if (user.role === "admin") return <Navigate to="/admin/dashboard" />;
    return <Navigate to="/user/dashboard" />;
  }

  //  Role-based protection
  if (
    isAuthenticated &&
    user.role !== "admin" &&
    location.pathname.startsWith("/admin")
  ) {
    return <Navigate to="/unauthPage" />;
  }

  if (
    isAuthenticated &&
    user.role !== "user" &&
    location.pathname.startsWith("/user")
  ) {
    return <Navigate to="/unauthPage" />;
  }

  return children;
}
