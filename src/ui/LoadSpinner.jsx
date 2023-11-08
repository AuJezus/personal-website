import { ScaleLoader } from "react-spinners";

function LoadSpinner({ size }) {
  if (size === "lg")
    return <ScaleLoader color="#8b5cf6" width={2} margin={5} />;

  return <ScaleLoader color="#8b5cf6" width="1px" />;
}

export default LoadSpinner;
