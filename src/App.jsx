import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Blog />
        <Contact />
      </main>

      <footer>
        <p>© 2026 Sanjay. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;