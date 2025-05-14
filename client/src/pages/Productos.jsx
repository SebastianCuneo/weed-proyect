const productos = [
  {
    id: 1,
    nombre: "Aceite de CBD 10%",
    descripcion: "Ideal para aliviar el estrés y mejorar el sueño.",
    precio: "$2.490",
    imagen: "https://via.placeholder.com/300x200?text=CBD+10%",
  },
  {
    id: 2,
    nombre: "Semillas feminizadas OG Kush",
    descripcion: "Cepa potente y clásica para cultivo interior o exterior.",
    precio: "$990",
    imagen: "https://via.placeholder.com/300x200?text=OG+Kush",
  },
  {
    id: 3,
    nombre: "Vaporizador portátil X-Cloud",
    descripcion: "Diseño compacto, batería duradera y fácil de usar.",
    precio: "$7.990",
    imagen: "https://via.placeholder.com/300x200?text=Vaporizador",
  },
];

export default function Productos() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-green-700 mb-6">
        Nuestros productos recomendados
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-800">
                {producto.nombre}
              </h3>
              <p className="text-gray-700 mt-2">{producto.descripcion}</p>
              <p className="text-green-600 font-bold mt-4">{producto.precio}</p>
              <button className="mt-2 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-900">
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
