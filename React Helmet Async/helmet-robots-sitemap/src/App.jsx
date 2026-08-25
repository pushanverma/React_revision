import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ListingPage from "./components/ListingPage";
import Detail from "./components/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/listing" element={<ListingPage/>}/>
        <Route path="/detail" element={<Detail/>}/>
      </Routes>
    </>
  );
}

export default App;
