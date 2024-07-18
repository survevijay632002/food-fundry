import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Section2 from "./pages/Home/Section2";
import Section3 from "./pages/Home/Section3";
import Section4 from "./pages/Home/Section4";
import Section5 from "./pages/Home/Section5";
import Section6 from "./pages/Home/Section6";
import Addtocart from "./pages/Home/Addtocart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Section2 />} />
      <Route path="/menu" element={<Section3 />} />
      <Route path="/shop" element={<Section4 />} />
      <Route path="/blog" element={<Section5 />} />
      <Route path="/contact" element={<Section6 />} />
      <Route path="/addtocart" element={<Addtocart />} />
    </Routes>
  );
}

export default App;
