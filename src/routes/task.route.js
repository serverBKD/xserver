import express from "express";
const router = express.Router();

import { toGetTasks, toAddTask } from "../controllers/tasks.controller.js";

router.get("/", toGetTasks);

router.post("/", toAddTask);

export default router;
