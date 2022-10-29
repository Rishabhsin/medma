
import doctor from '../models/doctorsinup.js'

export const createDoctor= async(req,res)=>{
    const newDoctor =new doctor(req.body);
   
    try{
        const Doctor = await newDoctor.save();
        res.status(200).json(Doctor);
    }catch(error)
    {
        throw(error);
    }
}
