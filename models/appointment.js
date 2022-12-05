import mongoose, { trusted } from "mongoose";
const appointmentBookSchema = mongoose.Schema({

doctorname:{
    type: String,
    require: true
},

complete:{
    type:String,
    default:"no"
},
name:{
    type: String,
    require: true
},

age:{
    type: String,
    require: true,
},

gender:{
    type: String,
    require: true
},

symptom:{
    type: String,
    require: true,
},

date:{
    type: String,
    require: true
},

address:{
    type: String,
    require: true
},

email:{
    type: String,
    require: true
},

phone:{
    type: String,
    require: true
}
});

export default mongoose.model("appointment", appointmentBookSchema)
