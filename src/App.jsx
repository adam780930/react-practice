import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation.jsx";
import ScrollPage from "./pages/ScrollPage.jsx";
import Examplepage from "./pages/Examplepage.jsx";
import Introduction from "./pages/Introduction.jsx";
import Background from "./components/Background.jsx";

function App() {
  return (
    <div>
      <Background />
      <Navigation />

      <div className="pt-24">
        <Routes>
          <Route path="/" element={<ScrollPage />} />
          <Route path="/markdown" element={<Navigate to="/#markdown" replace />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          <Route path="/example" element={<Examplepage />} />
          <Route path="/introduction" element={<Introduction />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
