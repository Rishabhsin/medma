import express from "express"
import { createDoctor, updatedoctor, deletedoctor, getdoctor, getdoctors,sign } from "../controllers/doctorsinup.js";

const router = express.Router();

router.post('/',createDoctor);
router.put('/:id', updatedoctor);
router.delete('/:id',deletedoctor);
router.get('/:id',getdoctor);
router.get('/',getdoctors);
router.get("/:email/:password",sign);


export default router;
