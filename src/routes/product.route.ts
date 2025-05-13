import express from 'express'
import { getProductsFromMockup, getProductsFromDatabase, getProductById,addProductToDatabase } from '../controllers/products.controller'
const router = express.Router()

router.get('/', async (_req, res) => {
  console.log('GET /products')
  const productsFromDatabase = await getProductsFromDatabase()
  if (productsFromDatabase.length === 0) {
    console.log('No products found in the database')
    return res.status(404).json({ error: 'No products found' })
  }
  return res.json({ products: productsFromDatabase })
}
)

router.get('/mockup', (_req, res) => {
  res.json(getProductsFromMockup())
}
)

router.get('/:id', (req, res) => {
  const id = req.params.id
  const product = getProductById(id)
  return (product !== null)
    ? res.json({ product })
    : res.status(404).json({ error: 'Product not found' })
}
)

router.post('/', (req, res) => {
  console.log('POST /products')
    const product = req.body
    const newProduct = addProductToDatabase({ payload: product })
    if (!newProduct) {  
        console.log('Error creating product')
        res.status(500).json({ error: 'Error creating product' })
    }
  res.status(201).json(product)
}
)

export default router
