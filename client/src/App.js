import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GrowingGuide from "./components/GrowingGuide";
import Productos from "./components/Productos";
import Contacto from "./components/Contacto";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guides" element={<GrowingGuide />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <div className="App">
        <Header />
        <Home></Home>
      </div>
    </>
  );
}

export default App;
