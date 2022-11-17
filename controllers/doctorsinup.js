
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
export const updatedoctor = async(req, res, next) =>{
    try {
        const updatedoctor = await doctor.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true});
        res.status(200).json(updatedoctor);

    } catch (error) {
        next(error);        
    }
}

export const deletedoctor = async(req, res, next)=>{
    try {
        await doctor.findByIdAndDelete(req.params.id);
        res.status(200).json("doctor successfully deleted");
    } catch (error) {
        next(error);
    }
}

export const getdoctor = async (req, res, next) => {
    try {
        const doctor1 = await doctor.findById(req.params.id)
        res.status(200).json(doctor1);
    } catch (err) {
        next(err);
    }
}

export const sign = async (req,res,next) => {
    const user = req.params.email;
    const password = req.params.password;
    try{
        const doctor1=await doctor.find({email:user,password:password});
        res.status(200).json(doctor1);
//          res.status(200).json(ngol);
    } catch(err){
        next(err);
    }
    
}

export const getdoctors = async (req, res, next) => {
    try {
        const doctors = await doctor.find();
        res.status(200).json({data: doctors});
    } catch (err) {
        next(err)
    }
}
