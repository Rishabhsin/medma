import mongoose, { trusted } from "mongoose";
const appointmentBookSchema = mongoose.Schema({

name:{
    type: String,
    require: true
},

age:{
    type: Number,
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
    type: Number,
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
    type: Number,
    require: true
}
});

export default mongoose.model("appointment", appointmentBookSchema)