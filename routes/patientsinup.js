import express from "express";
import { createPatient , updatePatient, deletePatient} from "../controllers/patientsinup.js";

const router = express.Router();


router.post('/', createPatient);
router.put('/:id', updatePatient);
router.delete('/:id', deletePatient)

export default router;
