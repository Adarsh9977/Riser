const express= require("express");
const WeeklyGoals = require("../models/weeklyGoal");
const router = express.Router();
const Auth = require("../middleware/Auth");

router.post("/weekly-goal", Auth, async(req, res)=>{
    const {description, status, priority, endDate} = req.body;
    const user=req.user;
    try {
        const weeklygoal= new WeeklyGoals({
            description,
            status,
            priority,
            endDate,
            createdBy:user.id,
        })

        const goal = await weeklygoal.save();
        console.log(goal);
        return res.json({
            goal
        })
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            msg:"error while uploading weekl goals", err
        })
    }
})

router.get("/weekly-goals", Auth,  async(req, res)=>{

    try {
        const weeklyGoals= await WeeklyGoals.find({createdBy:req.user.id}).populate('');
        return res.json({
            weeklyGoals
        })
    } catch (error) {
        return res.status(405).json({
            msg:"error while getting weekly-goals"
        })
    }

})

router.put('/weekly-goal/:goalId',Auth, async(req, res)=>{
    const {description, status, priority, endDate}= req.body;
    const goalId= req.params.goalId;

    const Goal= await WeeklyGoals.findById(goalId);
    if(!Goal){
        return res.json({
            msg:"goal not found"
        })
    }

    try {
        const goal= await WeeklyGoals.findByIdAndUpdate(goalId, {
            description:description,
            status,
            priority,
            endDate
        }, {new:true})
        return res.json({
            msg:"goal is updated",
            goal
        })
    } catch (error) {
        
    }
})

router.delete("/weekly-goal/:goalId", Auth, async(req, res)=>{
    const goalid =req.params.goalId
    await WeeklyGoals.findByIdAndDelete(goalid)
    const goal= await WeeklyGoals.findById(goalid);
    if(!goal){
        return res.json({
            msg:"goal is  deleted"
        })
    }else{
        return res.json({
            goal
        })
    }
})

module.exports= router;