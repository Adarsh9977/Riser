const express = require("express");
const cors = require("cors");
require('dotenv').config();
const connectDB= require("./config/connectDB");
const authRoutes= require("./Routes/Auth");
const WeeklyGoalRoutes= require("./Routes/Weeklygoal")
const DailyGoalRoutes= require("./Routes/DailyGoal")
const LongGoalRoutes = require("./Routes/LongGoal");
const app= express();
app.use(express.json());
app.use(cors({
    origin:true,
    credentials:true
}));

app.use("/api/auth", authRoutes);
app.use("/api/goal", LongGoalRoutes, WeeklyGoalRoutes,DailyGoalRoutes)

connectDB().then(()=>{ 
    app.listen(process.env.PORT, ()=>{
        console.log("Server is running");
    })
})
