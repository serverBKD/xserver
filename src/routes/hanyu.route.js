import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("汉语!app");
});

export default router;
