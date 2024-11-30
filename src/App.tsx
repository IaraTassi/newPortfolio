import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Course from "./components/Course/Course";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Course />
    </div>
  );
}

export default App;
