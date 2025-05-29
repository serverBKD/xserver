import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("My first Sale!");
});

export default router;
