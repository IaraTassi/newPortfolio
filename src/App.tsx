import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Course from "./components/Course/Course";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Course />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
