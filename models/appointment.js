import mongoose, { trusted } from "mongoose";
const appointmentBookSchema = mongoose.Schema({

name:{
    type: String,
    require: true
},

age:{
    type: String,
    require: trusted,
},

gender:{
    type: String,
    require: true
},

symptom:{
    type: String,
    require: trusted,
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
