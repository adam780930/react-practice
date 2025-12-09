import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation.jsx";
import Mainpage from "./pages/Mainpage.jsx";
import Submainpage from "./pages/Submainpage.jsx";
import Examplepage from "./pages/Examplepage.jsx";
import Additionalpage from "./pages/Additionalpage.jsx";
import Markdownpage from "./pages/Markdownpage.jsx";
import Introduction from "./pages/Introduction.jsx";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/sub" element={<Submainpage />} />
        <Route path="/example" element={<Examplepage />} />
        <Route path="/additional" element={<Additionalpage />} />
        <Route path="/markdown" element={<Markdownpage />} />
        <Route path="/introduction" element={<Introduction />} />
      </Routes>
    </div>
  );
}

export default App;
