import mongoose from "mongoose";

const connectMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.local.MONGODB_URI)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log('Connection failed')
    }
}

export default connectMongoDB;