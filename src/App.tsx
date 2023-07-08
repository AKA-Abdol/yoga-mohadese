import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Reserve from "./pages/Reserve";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
import BodyLayout from "./components/layout/BodyLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BodyLayout />}>
          <Route path="auth" element={<Auth />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="terms" element={<Terms />} />
          <Route path="reserve" element={<Reserve />} />

          <Route path="/" element={<Navigate to={"/auth"} />} />
          <Route path="/redirect" element={<Navigate to={"/"} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
