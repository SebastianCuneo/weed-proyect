import { Router } from "express";
import { listProductos, getProducto } from "../controllers/productos.js";

const router = Router();
router.get("/", listProductos);
router.get("/:id", getProducto);
export default router;
