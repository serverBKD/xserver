import { Router } from "express"
import { getListEmails, getListEmailById, createListEmail } from "../controllers/listemail.controller.js"

const router = Router()

router.get( "/", getListEmails )
router.get( "/:id", getListEmailById )
router.post( "/", createListEmail )

export default router
