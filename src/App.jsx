import { Routes, Route } from "react-router-dom";
import "./App.css";
import Mainpage from "./pages/Mainpage.jsx";
import Submainpage from "./pages/Submainpage.jsx";
import Examplepage from "./pages/Examplepage.jsx";
import Additionalpage from "./pages/Additionalpage.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/sub" element={<Submainpage />} />
        <Route path="/example" element={<Examplepage />} />
        <Route path="/additional" element={<Additionalpage />} />
      </Routes>
    </div>
  );
}

export default App;
