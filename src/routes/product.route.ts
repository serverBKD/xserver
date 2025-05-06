import express from "express"
import { getProducts } from "../services/products.service"
const router = express.Router()

router.get("/", (_req, res) => {
    res.json(getProducts())
}
)   

router.post("/", (req, res) => {
    console.log("POST /products")
    const product = req.body
    res.status(201).json(product)
}
)

export default router