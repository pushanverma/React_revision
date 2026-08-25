import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ListingPage from "./components/ListingPage";
import Detail from "./components/Detail";
import Admin from "./components/Admin";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/listing" element={<ListingPage />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
