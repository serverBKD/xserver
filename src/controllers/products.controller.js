// import type { Product } from "../types.d.ts";
// import { Request, Response } from "express";
import productsData from "../services/products.json";
import prisma from "../models/prisma_client.js";
import crypto from "crypto";

//const products: Product[] = productsData as Product[];

export const toGetProductsFromMockup = (_req, res) => {
  res.json(productsData);
};

export const toGetProductsFromDatabase = async (_req, res) => {
  const $ProductsFromDatabase = await prisma.product.findMany();
  if ($ProductsFromDatabase.length === 0) {
    res.send("No products found in the database");
  }
  res.json($ProductsFromDatabase);
};

export const toAddProductToDatabase = async (req, res) => {
  const {
    fullname,
    description,
    trademark,
    code,
    serial,
    barcode,
    sku,
    img,
    price_base,
    delta,
    divisa,
    stock,
    unity,
    weigth,
    dimension,
    notes,
    tags,
    category,
    warehouseId,
    source,
  } = req.body;

  const $newProduct = await prisma.product.create({
    data: {
      id: crypto.randomUUID(),
      fullname,
      description,
      trademark,
      code: code || crypto.randomBytes(6).toString("hex"),
      serial,
      barcode,
      sku: sku || crypto.randomUUID(),
      img,
      price_base,
      delta,
      divisa,
      stock,
      unity,
      weigth,
      dimension,
      notes,
      tags,
      category,
      warehouseId,
      source: source || "form-api-product",
    },
  });

  // if (!$newProduct) return
  res.json($newProduct);
};

export const toGetProductById = async (req, res) => {
  const id = req.params.id;
  const $Product = await prisma.product.findFirst({
    where: {
      id: id,
    },
  });
  return $Product !== null
    ? res.json({ $Product })
    : res.status(404).json({ error: "Product not found" });
};
