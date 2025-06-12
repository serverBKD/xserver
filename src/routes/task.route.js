import express from "express";
const router = express.Router();

import { getTasks, toAddTask } from "../controllers/tasks.controller.js";

router.get("/", getTasks);

router.post("/", toAddTask);

export default router;
