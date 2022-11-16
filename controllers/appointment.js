import appointment from "../models/appointment.js";


export const createAppointment= async(req,res)=>{
    const newappointment = new appointment(req.body);
   
    try{
        const appointment = await newappointment.save();
        res.status(200).json(appointment);
    }catch(error)
    {
        throw(error);
    }
}



export const updateAppointment= async (req, res, next) => {
    try {
        const updateappointment = await appointment.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateappointment);
    } catch (error) {
            next(error);
        }
}

export const deleteappointment= async(req, res, next) =>{
    try { 
        await appointment.findByIdAndDelete(req.params.id);
        res.status(200).jso("Appointment Canceled");

    } catch (error) {
        next(err)
        
    }
}

export const getappointment = async (req, res, next) => {
    try {
        const appointment = await appointment.findById(req.params.id)
        res.status(200).json(appointment);
    } catch (err) {
        next(err);
    }
}

export const getappointments = async (req, res, next) => {
    try {
        const appointments = await appointment.find()
        res.status(200).json({data : appointments});
    } catch (err) {
        next(err);
    }
}

