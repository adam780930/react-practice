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
import ThemeToggle from "./components/Themetoggle.jsx";

function App() {
  let darkMode = false;
  let styling = ""
  const themeControl = () => {
    if ((darkMode = false)) {
      styling = "bg-stone-block w-full max-w-5xl px-4 py-2 mx-auto bg-stone-300 rounded";
      console.log("this is light mode")
    } else {
      styling = "bg-stone-block w-full max-w-5xl px-4 py-2 mx-auto bg-black text-white rounded";
    }
    return styling;
  }
  return (
    <div>
      <Background />
      <ThemeToggle />
      <Navigation />
      <div className="py-8"></div>
      <Routes>
        <Route path="/" element={<Mainpage themeControl={themeControl} />} />
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
