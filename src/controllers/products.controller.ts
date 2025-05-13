import type { Product } from '../types.d.ts'
import productsData from '../services/products.json'

const products: Array<Product> = productsData as Array<Product>

export const getProducts = (): Array<Product> => products

export const addProduct = () => null

export const getProductById = (id: string): Product | null => {
    const product = products.find((product) => product.id === id)
    return product || null
}

//! Array<Product> = Product[]