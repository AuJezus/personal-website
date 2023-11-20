import { BiLogoGithub, BiLogoGoogle } from "react-icons/bi";
import {
  authenticateGithub,
  authenticateGoogle,
  logOut,
} from "../../services/auth";
import Button from "../../ui/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Auth() {
  const navigate = useNavigate();
  const user = useAuth();
  const { state } = useLocation();

  async function authenticateAndReroute(authFn) {
    await authFn();

    if (state?.goTo) navigate(state.goTo, { state: null });
  }

  return (
    <div className="flex flex-col items-center gap-12 mt-36">
      <h1 className="text-3xl">{`${
        user ? "You are signed in" : "To continue please sing in:"
      }`}</h1>
      <div className="flex justify-center gap-12">
        {user && <Button click={logOut}> Log out</Button>}
        {!user && (
          <>
            <Button
              type="primary"
              click={() => authenticateAndReroute(authenticateGithub)}
            >
              <BiLogoGithub /> GitHub
            </Button>
            <Button
              type="primary"
              click={() => authenticateAndReroute(authenticateGoogle)}
            >
              <BiLogoGoogle /> Google
            </Button>

            <Button type="primary" click={() => navigate("/notFound")}>
              <BiLogoGoogle /> Try
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Auth;
