import { useState } from "react";
import Hero from "./Hero";

function App() {
  const [count, setCount] = useState(0);

  return <Hero></Hero>;
}

export default App;
