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
        type: String,
        require: true
    },

    password: {
        type: String,
        require: true
    }

});

export default mongoose.model("pSinup", patientSinupSchema);
