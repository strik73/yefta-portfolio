import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Welcome from "./pages/welcome";
import Projects from "./pages/projects";
import OtherProjects from "./pages/otherprojects";
// import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen text-white font-sans">
      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/otherprojects" element={<OtherProjects />} />
      </Routes>
    </div>
  );
}
