import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Mainpage from "./pages/Mainpage.jsx";
import Submainpage from "./pages/Submainpage.jsx";
import Navigation from "./components/Navigation.jsx";
import Clipboards from "./components/Clipboards.jsx";
import Button from "./components/Button.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navigation />
        <div className="card">
          <Button
            onClick={() => setCount((count) => count + 1)}
            buttonName={`count is ${count}`}
          />
        </div>
        <span className="read-the-docs">
          <h1>example text 1</h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet atque
          odit dolores! Perspiciatis qui esse vero corrupti deserunt velit
          repellendus iure nemo eos, quaerat, officiis fuga explicabo accusamus.
          Eum, cum.
        </span>
        <span className="read-the-docs">
          <h1>example text 2</h1>
          <span>First Name: John</span>
          <hr></hr>
          <span>Last Name: Doe</span>
          <hr></hr>
          <span>Gender: Male</span>
          <hr></hr>
          <span>Age: 28</span>
        </span>
        <Clipboards />
      </div>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/sub" element={<Submainpage />} />
      </Routes>
    </>
  );
}

export default App;
