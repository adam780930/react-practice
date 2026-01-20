import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation.jsx";
import Mainpage from "./pages/Mainpage.jsx";
import Submainpage from "./pages/Submainpage.jsx";
import Examplepage from "./pages/Examplepage.jsx";
import Contactpage from "./pages/Contactpage.jsx";
import Markdownpage from "./pages/Markdownpage.jsx";
import Introduction from "./pages/Introduction.jsx";
import Background from "./components/Background.jsx";

function App() {
  return (
    <div>
      <Background />
      <Navigation />
      <div className="py-5 my-5"></div>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/sub" element={<Submainpage />} />
        <Route path="/example" element={<Examplepage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/markdown" element={<Markdownpage />} />
        <Route path="/introduction" element={<Introduction />} />
      </Routes>
    </div>
  );
}

export default App;
