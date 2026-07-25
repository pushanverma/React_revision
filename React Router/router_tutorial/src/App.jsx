import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
     <Navbar/>


{/* Routes always comes at last after the components  */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    
    </>
  );
}

export default App;
