import { Router } from "express";
import {
  toGetPartners,
  toGetPartnerById,
  toCreatePartner,
  toUpdatePartner,
  toDeletePartner,
} from "../controllers/partner.controller.js";

const router = Router();

// Route to get all partners
router.get("/", toGetPartners);
// Route to create a new partner
router.post("/", toCreatePartner);
// Route to update an existing partner
router.put("/:id", toUpdatePartner);
// Route to delete a partner
router.delete("/:id", toDeletePartner);

export default router;

// {}
