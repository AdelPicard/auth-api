import mongoose from "mongoose";
require('dotenv').config()

const connectDB = () => {
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@imagecluster.q9n5u9j.mongodb.net/?retryWrites=true&w=majority`)
} 

export default connectDB