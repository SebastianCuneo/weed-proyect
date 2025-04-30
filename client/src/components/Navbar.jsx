import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-800 text-white p-4 flex justify-between">
      <h1 className="font-bold text-lg">WeedSite 🌿</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Inicio
        </Link>
        <Link to="/productos" className="hover:underline">
          Productos
        </Link>
        <Link to="/contacto" className="hover:underline">
          Contacto
        </Link>
      </div>
    </nav>
  );
}
