import { Router } from "express"

const router = Router()

router.get('/', (_req, res) => {
    res.send('...logging all the data & errors')
})

export default router