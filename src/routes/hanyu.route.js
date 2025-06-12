import { getHanyu,createHanyu,updateHanyu,deleteHanyu } from "../controllers/hanyu.controller.js";
import { Router } from "express";
const router = Router();

router.get("/", getHanyu);
router.post("/", createHanyu);
router.put("/:id", updateHanyu);
router.delete("/:id", deleteHanyu);

export default router;
