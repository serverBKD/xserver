import express from "express";
const router = express.Router();

import { toGetTasks, toAddTask } from "../controllers/tasks.controller";

router.get("/", toGetTasks);

router.post("/", toAddTask);

export default router;
