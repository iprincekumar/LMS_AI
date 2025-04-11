import mongoose from "mongoose";

//connect to mongodb
const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log('Connected to MongoDB'))

    await mongoose.connect(`${process.env.MONGODB_URI}/EduGenius`)
}

export default connectDB