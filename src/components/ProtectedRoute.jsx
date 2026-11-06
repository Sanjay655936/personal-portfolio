import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute() {
  const { isAuthenticated, checked } = useSelector(
    (state) => state.auth
  );

  if (!checked) {
    return <p>Checking authentication...</p>;
  }

  return isAuthenticated
    ? <Outlet />
    : <Navigate to="/admin/login" replace />;
}