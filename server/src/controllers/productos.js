import { Producto } from "../models/Producto.js";

export async function listProductos(req, res, next) {
  try {
    const items = await Producto.findAll();
    res.json(items);
  } catch (err) {
    next(err);
  }
}

export async function getProducto(req, res, next) {
  try {
    const item = await Producto.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: "No encontrado" });
    res.json(item);
  } catch (err) {
    next(err);
  }
}
