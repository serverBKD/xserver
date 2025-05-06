import type { Product } from '../types.d.ts'
import productsData from './products.json'

const products: Array<Product> = productsData as Array<Product>

export const getProducts = (): Array<Product> => products

export const addProduct = () => null

//! Array<Product> = Product[]