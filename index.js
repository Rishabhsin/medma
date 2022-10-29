import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import doctorRoute from "./routes/doctorsinup.js";
import patientRout from "./routes/patientsinup.js";
// import donarRoute from "./routes/donar.js"
// import authRoute from "./routes/auth.js";
// import ngosRoute from "./routes/ngo.js";


//App config
const app = express();
dotenv.config();


//DB config
const connect = async () => {
    try {

        await mongoose.connect(process.env.MONGO);
        console.log("Connected to Mongodb");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("MongDB Disconnected");
});

// middleware
app.use(express.json());
app.use(cors());
app.use("/api/doctor", doctorRoute);
app.use("/api/patient", patientRout);
app.use("/",(res,req)=>{
res.send("Home")})
// app.use("/api/auth", authRoute);
// app.use("/api/ngo", ngosRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "something else"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});


// App listern
app.listen(3000, () => {
    connect();
    console.log("connected to backend");
});
