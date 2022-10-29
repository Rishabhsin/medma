import mongoose from "mongoose";

const loginSchema = mongoose.Schema({

email: {
    type: String,
    require: true,
},

password: {
    type: String,
    require: true,
}
});

export default mongoose.model("userlogin", loginSchema);