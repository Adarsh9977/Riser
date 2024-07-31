const express= require("express");
const DailyGoal= require("../models/dailyGoal");
const router= express.Router();
const Auth= require("../middleware/Auth")

router.post("/daily-goal", Auth, async(req, res)=>{
    const {description, status, priority, endDate} = req.body;
    const user = req.user;

    try {
        const goal = new DailyGoal({
            description,
            status,
            priority,
            endDate,
            createdBy:user.id,
        })
        const Goal = await goal.save();
        return res.json({
            Goal
        })
    } catch (error) {
        return res.json({
            msg:"daily goal is not posted"
        })
    }
})

router.get("/daily-goals", Auth, async(req, res)=>{
    const user = req.user;
    try {
        const goals= await DailyGoal.findOne({
            createdBy:user.id
        })
        return res.json({
            goals
        })
    } catch (error) {
        return res.status(403).send("Error while getting daily goals")
    }
})

router.put("/daily-goal/:goalId", Auth, async(req, res)=>{
    const {description, status, priority, endDate}= req.body;
    const goalId= req.params.goalId;
    const IsGoalPresent= await DailyGoal.findById(goalId);
    if(!IsGoalPresent){
        return res.status(405).send("goal is not present")
    }
    try {
        const goal= await DailyGoal.findByIdAndUpdate(goalId, {
            description,
            status,
            priority,
            endDate,
            createdBy:req.user.id
        }, {new:true})

        const Goal = await goal.save();
        return res.status(201).json({
            Goal
        })
    } catch (error) {
        return res.status(405).send("error while updating goal")
    }
})

router.delete("/daily-goal/:goalId", Auth, async(req, res)=>{
    const goalid= req.params.goalId;
    await DailyGoal.findByIdAndDelete(goalid);
    const goal = await DailyGoal.findById(goalid);
    if(!goal){
        return res.status(200).json({
            msg:"Goal is delted"
        })
    }else{
        return res.status(400).send("error while deleting daily-goal")
    }
})

module.exports= router
