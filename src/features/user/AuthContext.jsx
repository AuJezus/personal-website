import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../../services/auth";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsPending(false);
    });

    return () => unsubscribe();
  }, []);

  if (isPending) return null;

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("useAuth was used outside of the AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
