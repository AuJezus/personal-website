import useScrollUp from "../../utils/useScrollUp";

function Navigation({ children }) {
  const isScrollUp = useScrollUp();

  return <nav></nav>;
}

export default Navigation;
