import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Listing all those rich emails...");
});

export default router;
