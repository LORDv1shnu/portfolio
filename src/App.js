import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Calculator from "./pages/Calculator";
import Todo from "./pages/Todo";
import "./Header.css";
import "./Footer.css";
import "./CardSection.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-root">
        {/* ================= Header ================= */}
        <header className="header">
          <h1>Vishnu's Portfolio</h1>
          <nav aria-label="Main Navigation">
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/calculator">Calculator</Link>
            <Link to="/todo">To-Do</Link>
            <a href="https://github.com/LORDv1shnu" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/vishnunandan555/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </nav>
        </header>

        {/* ================= Main Content ================= */}
        <main className="app-main-content">
          <div className="content-wrapper">
            <Routes>
              {/* Default route shows About */}
              <Route path="/" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/todo" element={<Todo />} />
            </Routes>
          </div>
        </main>

        {/* ================= Footer ================= */}
        <footer>
          Made with 💖
        </footer>
      </div>
    </Router>
  );
}

export default App;