import express from "express"; 
import { createAppointment, deleteappointment, getappointment, getappointments, updateAppointment } from "../controllers/appointment.js";

const router = express.Router();

router.post('/',createAppointment);
router.put('/:id', updateAppointment);
router.delete('/:id', deleteappointment);
router.get('/:id', getappointment);
router.get('/', getappointments);

export default router;