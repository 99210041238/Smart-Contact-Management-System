import express from "express";
import {
  addContact,
  getContacts,
  updateContact,
  deleteContact
} from "../Controllers/contactController.js";
const router = express.Router();

router.post("/", addContact);   // CREATE
router.get("/", getContacts);   // READ
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

export default router;
