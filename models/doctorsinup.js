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
        type: Number,
        require: true
    },

    PanId:{
        type: String,
        require: true
    },

    adharNumber: {
        type: Number,
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
        type: Number,
        require: true
    },
    
   
    department: {
        type: String,
        require: true
    }

});

export default mongoose.model("dSinup", doctorSinupSchema);
