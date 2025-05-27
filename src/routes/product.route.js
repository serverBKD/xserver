import express from "express";
const router = express.Router();
import {
  toGetProductsFromMockup,
  toGetProductsFromDatabase,
  toGetProductById,
  toAddProductToDatabase,
} from "../controllers/products.controller";

router.get("/", toGetProductsFromDatabase);

router.get("/mockup", toGetProductsFromMockup);

router.get("/:id", toGetProductById);

router.post("/", toAddProductToDatabase);

export default router;
