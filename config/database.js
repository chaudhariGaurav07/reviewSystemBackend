import mongoose from "mongoose";
// mongoDb connection
const dbConnect = async () => {
    try {
       await mongoose.connect(process.env.MONGODB_URL);
        console.log("mongodb connected successfully")
    } catch (error) {
        console.log("connenction failed", error)
    }
}

export default dbConnect; 
