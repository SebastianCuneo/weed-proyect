import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GrowingGuide from "./components/GrowingGuide";
import Productos from "./components/Productos";
import Contacto from "./components/Contacto";
import GerminacionSemillas from "./components/GuiaDeCultivo/GerminacionSemillas.js";
import ArticulosEducativos from "./components/ArticulosEducativos/ArticulosEducativos.js";
import PreparacionSuelo from "./components/GuiaDeCultivo/PreparacionSuelo.js";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guides" element={<GrowingGuide />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/germinacionSemillas" element={<GerminacionSemillas />} />
        <Route path="/articulos-educativos" element={<ArticulosEducativos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/preparacion-suelo" element={<PreparacionSuelo />} />
      </Routes>
      <div className="App"></div>
    </>
  );
}

export default App;
