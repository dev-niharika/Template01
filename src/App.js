import Home from "./Component/Home";
import Support from "./Component/Support";
import Footer from "./Component/Footer";
import Nabvar from "./Component/Nabvar";
import VideoBackground from "./Component/VideoBackground";
import "./style/navbar.css";
import "./style/home.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Component/About";
import Contact from "./Component/Contact";

function App() {
  return (
    <div>
      <Router>
        <Nabvar />
        <VideoBackground>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </VideoBackground>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
