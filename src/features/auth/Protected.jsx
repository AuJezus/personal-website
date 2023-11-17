import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Protected({ children }) {
  const location = useLocation();
  // console.log(location);
  const user = useAuth();

  if (!user)
    return <Navigate to="/blog/auth" state={{ goTo: location.pathname }} />;

  return children;
}

export default Protected;
