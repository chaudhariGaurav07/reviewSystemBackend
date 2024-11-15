import mongoose from "mongoose";

const dbConnect = async () => {
    try {
       await mongoose.connect(process.env.MONGODB_URL);
        console.log("mongodb connected successfully")
    } catch (error) {
        console.log("connenction failed", error)
    }
}

export default dbConnect;