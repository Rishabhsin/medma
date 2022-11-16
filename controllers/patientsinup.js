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

export const updatePatient= async (req, res, next) => {
    try {
        const updatePatient = await Patient.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatePatient);
    } catch (error) {
            next(error);
        }
}

export const deletePatient= async(req, res, next) =>{
    try { 
        await Patient.findByIdAndDelete(req.params.id);
        res.status(200).jso("Delete Patient Successful");

    } catch (error) {
        next(err)
        
    }
}

export const getpatient = async (req, res, next) => {
    try {
        const patient = await Patient.findById(req.params.id)
        res.status(200).json(patient);
    } catch (err) {
        next(err);
    }
}
export const getpatients = async (req, res, next) => {
    try {
        const patients = await Patient.find(req.params.id)
        res.status(200).json(patients);
    } catch (err) {
        next(err);
    }
}
