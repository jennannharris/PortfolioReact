import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.js";
import Project from "./Project";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:projectNum" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
