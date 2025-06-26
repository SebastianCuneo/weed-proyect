// src/config/db.js
import dotenv from "dotenv";
dotenv.config();
console.log("DB_PASS is", process.env.DB_PASS);
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: false,
    define: { underscored: true, timestamps: true },
  }
);

export async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("✅ Conectado a la base de datos");
  } catch (err) {
    console.error("❌ Error al conectar:", err);
    process.exit(1);
  }
}
