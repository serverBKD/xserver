import express from "express";
import {
  toGetProductsFromMockup,
  toGetProductsFromDatabase,
  toGetProductById,
  toAddProductToDatabase,
} from "../controllers/products.controller";
const router = express.Router();

router.get("/", toGetProductsFromDatabase);

router.get("/mockup", toGetProductsFromMockup);

router.get("/:id", toGetProductById);

router.post("/", toAddProductToDatabase);

export default router;
