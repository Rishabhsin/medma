import mongoose from "mongoose";

const patientSinupSchema = mongoose.Schema({

    name:{
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true
    },
    
    phoneNumber: {
        type: Number,
        require: true
    },

    password: {
        type: String,
        require: true
    }

});

export default mongoose.model("pSinup", patientSinupSchema);