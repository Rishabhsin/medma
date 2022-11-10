import express from "express"
import { createDoctor, updatedoctor, deletedoctor, getdoctor, getdoctors } from "../controllers/doctorsinup.js";

const router = express.Router();

router.post('/',createDoctor);
router.put('/:id', updatedoctor);
router.delete('/:id',deletedoctor);
router.get('/:id',getdoctor);
router.get('/',getdoctors);


export default router;
