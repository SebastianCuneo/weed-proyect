import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-green-50 min-h-screen text-gray-800">
      {/* Encabezado principal */}
      <section className="text-center py-20 px-6 bg-green-800 text-white">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Bienvenido a GreenMarket 🌿
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto">
          Tu guía confiable sobre cannabis medicinal, autocultivo y productos
          recomendados.
        </p>
        <div className="mt-6">
          <a
            href="/guias"
            className="inline-block bg-white text-green-800 font-semibold px-6 py-3 rounded-full shadow hover:bg-green-100 transition"
          >
            Explorar guías
          </a>
        </div>
      </section>

      {/* Sección de beneficios */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
          ¿Qué encontrarás en nuestro sitio?
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Artículos educativos
            </h3>
            <p>
              Aprendé sobre el uso medicinal, legal y responsable del cannabis.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Productos recomendados
            </h3>
            <p>
              Vaporizadores, aceites y accesorios seleccionados con enlaces
              afiliados.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Guías para cultivadores
            </h3>
            <p>
              Consejos sobre semillas, floración, cosecha y cuidados del
              autocultivo.
            </p>
          </div>
        </div>
      </section>

      {/* Imagen destacada */}
      <section className="px-4 py-12 bg-white">
        <img
          src="/images/cannabis2.jpg"
          alt="Imagen destacada"
          className="w-64 rounded-lg shadow mx-auto"
        />
      </section>
    </div>
  );
}
