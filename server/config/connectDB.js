const mongoose = require("mongoose");

async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGODB_URI) 
    } catch (error) {
        console.log("something error while connecting DB");
    }
}

module.exports= connectDB;