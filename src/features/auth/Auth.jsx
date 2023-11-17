import { BiLogoGithub, BiLogoGoogle } from "react-icons/bi";
import { authenticateGithub, authenticateGoogle } from "../../services/auth";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-12 mt-36">
      <h1 className="text-3xl">To continue please sing in:</h1>
      <div className="flex justify-center gap-12">
        <Button type="primary" click={authenticateGithub}>
          <BiLogoGithub /> GitHub
        </Button>
        <Button type="primary" click={authenticateGoogle}>
          <BiLogoGoogle /> Google
        </Button>

        <Button type="primary" click={() => navigate("/notFound")}>
          <BiLogoGoogle /> Try
        </Button>
      </div>
    </div>
  );
}

export default Auth;
