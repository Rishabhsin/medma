import express from "express";
import { createPatient } from "../controllers/patientsinup.js";

const router = express.Router();


router.post('/', createPatient);

export default router;