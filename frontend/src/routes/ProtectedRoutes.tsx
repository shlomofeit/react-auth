import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../store/userUserStore";

const ProtectedRoute = () => {
  const token = useUserStore((state) => state.token);

  if (!token) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
