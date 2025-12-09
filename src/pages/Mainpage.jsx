import { useState } from "react";
import Clipboards from "../components/Clipboards";
import Button from "../components/Button";

function Mainpage() {
    const [count, setCount] = useState(0);
  return (
    <div>
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
  );
}

export default Mainpage;
