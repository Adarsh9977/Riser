const mongoose = require("mongoose");

const longGoalSchema = new mongoose.Schema({
    long_goal:{
        type: String,
        required:true,
    },
    createdBy:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    }
}, {timestamps:true})
const LongGoal= mongoose.model("LongGoal", longGoalSchema);

module.exports= LongGoal;

