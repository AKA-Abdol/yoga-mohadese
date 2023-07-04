import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Reserve from "./pages/Reserve";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="w-full h-screen bg-green-300 text-black">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/reserve" element={<Reserve />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
