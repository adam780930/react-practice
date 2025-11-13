import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navigation from "./components/Navigation.jsx";
import Clipboards from "./components/Clipboards.jsx";
import Button from "./components/Button.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
      <div className="card">
        <Button
          onClick={() => setCount((count) => count + 1)}
          buttonName={`count is ${count}`}
        />
      </div>
      <p className="read-the-docs">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet atque
        odit dolores! Perspiciatis qui esse vero corrupti deserunt velit
        repellendus iure nemo eos, quaerat, officiis fuga explicabo accusamus.
        Eum, cum.
      </p>
      <Clipboards />
    </>
  );
}

export default App;
