import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Protected({ children }) {
  const location = useLocation();
  const user = useAuth();

  if (!user) return <Navigate to="/auth" state={{ goTo: location.pathname }} />;

  return children;
}

export default Protected;
