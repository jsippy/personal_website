import { Link, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Writings from "./pages/Writings";
import Contact from "./pages/Contact";


function Navbar() {
  return (
    <nav>
      <ul className="nav-home">
        <li className ="nav-item nav-home"><Link to="/">sippy.dev</Link></li>
      </ul>
      <ul className="nav-links">
        <li className="nav-item nav-link"><Link to="/about">about</Link></li>
        <li className="nav-item nav-link"><Link to="/projects">projects</Link></li>
        <li className="nav-item nav-link"><Link to="/writings">writings</Link></li>
        <li className="nav-item nav-link"><Link to="/contact">contact</Link></li>
      </ul>
    </nav>
  );
} 

/**
 * The root component of the application. It renders a navigation bar with links
 * to the home, about, and contact pages, as well as a heading and a paragraph of
 * text.
 */
export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/writings" element={<Writings />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}