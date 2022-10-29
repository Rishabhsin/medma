import patient from "../models/patientsinup.js";


export const createPatient = async(req,res)=>{
    const newPatient =new patient(req.body);
    try{
        const Patient = await newPatient.save();
        res.status(200).json(Patient);
    }catch(error)
    {
        throw(error);
    }




}