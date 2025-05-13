import {Router} from 'express'
const router = Router()

router.get('/', (_req, res) => {
    res.send('汉语!app')
})

export default router