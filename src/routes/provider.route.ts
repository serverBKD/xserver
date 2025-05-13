import { Router } from "express"
const router = Router()

router.get('/', (_req, res) => {
    res.send('insert provider data')
})

export default router