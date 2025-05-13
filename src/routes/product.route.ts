import express from "express"
import { getProducts,getProductById } from "../controllers/products.controller"
const router = express.Router()

router.get("/", (_req, res) => {
    res.json(getProducts())
}
)   

router.get("/:id", (req, res) => {
    const id = req.params.id
    const product = getProductById(id)
    return (product !== null)
        ? res.json({ product })
        : res.status(404).json({ error: "Product not found" }) 
}
)

router.post("/", (req, res) => {
    console.log("POST /products")
    const product = req.body
    res.status(201).json(product)
}
)

export default router