import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Course from "./components/Course/Course";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

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
