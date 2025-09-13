//libraries
import { useSelector } from "react-redux";
//hooks
import { Navigate, Outlet } from "react-router-dom";
//store
import type { RootState } from "@/store";
//components
import BeatLoaderFetch from "@/ui/BeatLoaderFetch";

export default function UserRoutes() {
  const { isAuthenticated, userRole } = useSelector(
    (state: RootState) => state.auth
  );

  if (isAuthenticated === false) {
    return <Navigate to="/auth/login" replace />;
  }
  if (isAuthenticated && userRole === "Admin") {
    return <Navigate to="/admin" replace />;
  }

  return (
    <div className="h-full">
      {isAuthenticated === null ? <BeatLoaderFetch /> : <Outlet />}
    </div>
  );
}
