import { Router } from "express"

const router = Router()

router.get('/', (_req, res) => {
    res.send('Listing all those rich emails...')
})

export default router