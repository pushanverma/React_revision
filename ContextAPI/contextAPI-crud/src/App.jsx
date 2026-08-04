import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import EmployeeList from "./components/EmployeeList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/employees" element={<EmployeeList />}></Route>
      </Routes>
    </>
  );
}

export default App;
