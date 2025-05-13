import app from './services/app'
import productRouter from './routes/product.route'
import type { Request, Response } from 'express'

app.use('/api/products', productRouter)

app.get('/', (_req: Request, res: Response) => {
  res.send('xserver!')
})
