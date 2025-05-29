import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("...logging all the data & errors");
});

export default router;
