const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
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
        default:Date.now
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

module.exports = mongoose.model('Goal', goalSchema);