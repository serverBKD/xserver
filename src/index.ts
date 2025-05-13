import app from './services/app'
import productRouter from './routes/product.route'
import clientRouter from './routes/client.route'
import taskRouter from './routes/task.route'
import hanyuRouter from './routes/hanyu.route'
import ventaRouter from './routes/venta.route'
import blogRouter from './routes/blog.route'
import listEmailRouter from './routes/listemail.route'
import logRouter from './routes/log.route'
import authRouter from './routes/auth.route'
import providerRouter from './routes/provider.route'
import type { Request, Response } from 'express'

app.use('/api/products', productRouter)
app.use('/api/clients', clientRouter)
app.use('/api/tasks', taskRouter)
app.use('/api/hanyu', hanyuRouter)
app.use('/api/ventas', ventaRouter)
app.use('/api/blog', blogRouter)
app.use('/api/listemail', listEmailRouter)
app.use('/api/logs', logRouter)
app.use('/api/auth', authRouter)
app.use('/api/providers', providerRouter)

app.get('/', (_req: Request, res: Response) => {
  res.send('xserver!')
})

