import type { Product } from '../types.d.ts'
import productsData from '../services/products.json'
import prisma from '../models/prisma_client'
import crypto from 'crypto'

const products: Product[] = productsData as Product[]

export const getProductsFromMockup = (): Product[] => products

export const getProductsFromDatabase = async () => {
  const productsFromDatabase = await prisma.product.findMany()
  if (productsFromDatabase.length === 0) {
    console.log('No products found in the database')
    return []
  }
  return productsFromDatabase || []
}

export const addProductToDatabase = async ({ payload }: any) => {
  payload.id = crypto.randomUUID()
  payload.code = crypto.randomBytes(6).toString('hex')
  payload.sku = crypto.randomUUID()
  
    const newProduct = await prisma.product.create({
        data: payload,
    })
    if (!newProduct) {
        console.log('Error creating product')
        return null
    }
    return newProduct   
}

export const getProductById = (id: string): Product | null => {
  const product = products.find((product) => product.id === id)
  return product || null
}

//! Array<Product> = Product[]
