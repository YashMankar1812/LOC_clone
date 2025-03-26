import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Franchise from "./pages/Franchise";
import Blog from "./pages/Blog";
import Locators from "./pages/Locators";
import Contact from "./pages/Contact";
import MenuSwiperPage from "./pages/MenuSwiperPage";


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuSwiperPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/locators" element={<Locators />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
