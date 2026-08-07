import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import EmployeeList from "./components/EmployeeList";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";
import {employees} from "./constants/EmployeeList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/user"></Route>
        <Route path="/employees" element={<EmployeeList data={employees}/>} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
