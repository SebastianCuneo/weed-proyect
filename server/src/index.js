// src/index.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { testConnection, sequelize } from "./config/db.js";

import productoRoutes from "./routes/productos.js";
//import contactoRoutes from "./routes/contactos.js";
//import guiaRoutes from "./routes/guias.js";
//import articuloRoutes from "./routes/articulos.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/productos", productoRoutes);
//app.use("/api/contactos", contactoRoutes);
//app.use("/api/guias", guiaRoutes);
//app.use("/api/articulos", articuloRoutes);

// Manejo básico de errores
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Error interno" });
});

async function start() {
  await testConnection();
  await sequelize.sync(); // crea tablas si no existen
  const port = process.env.PORT || 4000;
  app.listen(port, () => console.log(`🚀 Server en http://localhost:${port}`));
}

start();
