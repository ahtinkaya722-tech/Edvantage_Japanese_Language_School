import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NLevel from "./pages/NLevel";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nlevel" element={<NLevel />} />
      </Routes>
    </>
  );
}

export default App;
