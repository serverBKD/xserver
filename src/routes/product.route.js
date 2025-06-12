import express from "express";
const router = express.Router();
import {
  getProductsFromMockup,
  getProductsFromDatabase,
  getProductById,
  toAddProductToDatabase,
} from "../controllers/products.controller.js";

router.get("/", getProductsFromDatabase);

router.get("/mockup", getProductsFromMockup);

router.get("/:id", getProductById);

router.post("/", toAddProductToDatabase);

export default router;
