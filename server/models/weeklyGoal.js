const mongoose = require("mongoose");

const weeklyGoalSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        enum:["Low", "Medium", "High"],
    },
    status:{
        type:String,
        enum:["To do", "In Progress", "Completed"],
        default:"To do"
    },
    startDate:{
        type:Date,
    },
    endDate:{
        type:Date,
        required:true
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

module.exports= mongoose.model("WeeklyGoal", weeklyGoalSchema);
