import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-800 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">
        <Link to="/" className="hover:underline">
          Verde Sabio 🌿
        </Link>
      </h1>
      <div className="space-x-4">
        <Link to="/guias" className="hover:underline">
          Guías
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
