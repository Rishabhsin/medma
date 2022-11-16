import mongoose from "mongoose";

const doctorSinupSchema = mongoose.Schema({

    name:{
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true
    },
   
    password: {
        type: String,
        require: true
    },
    
    phoneNumber: {
        type: String,
        require: true
    },

    PanId:{
        type: String,
        require: true
    },

    adharNumber: {
        type: String,
        require: true
    },
   
    clinicName: {
        type: String,
        require: true
    },

    address: {
        type: String,
        require: true
    },

    time: {
        type: String,
        require: true
    },

    licenceNumber: {
        type: String,
        require: true
    },
    
   
    department: {
        type: String,
        require: true
    }

});

export default mongoose.model("dSinup", doctorSinupSchema);
