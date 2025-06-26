import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Producto = sequelize.define(
  "Producto",
  {
    nombre: { type: DataTypes.STRING(150), allowNull: false },
    precio: { type: DataTypes.DECIMAL(12, 2), allowNull: false },
    descripcion: { type: DataTypes.TEXT },
    imagen_url: { type: DataTypes.STRING },
    categoria: { type: DataTypes.STRING(50) },
    stock: { type: DataTypes.INTEGER, defaultValue: 0 },
  },
  {
    underscored: true, // mantiene created_at
    timestamps: false, // desactiva createdAt/updatedAt
  }
);
