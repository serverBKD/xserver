import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("insert provider data");
});

export default router;
