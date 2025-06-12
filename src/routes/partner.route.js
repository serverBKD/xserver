import { Router } from "express";
import {
  getPartners,
  getPartnerById,
  createPartner,
  updatePartner,
  deletePartner,
} from "../controllers/partner.controller.js";

const router = Router();

// Route to get all partners
router.get("/", getPartners);
// Route to create a new partner
router.post("/", createPartner);
// Route to update an existing partner
router.put("/:id", updatePartner);
// Route to delete a partner
router.delete("/:id", deletePartner);

export default router;

// {}
