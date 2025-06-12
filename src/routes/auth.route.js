import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("please insert yours credentials");
});

export default router;
