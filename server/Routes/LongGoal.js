const express= require("express");
const LongGoal= require("../models/LongGoal");
const router= express.Router();
const Auth= require("../middleware/Auth")

router.post("/long-goal",Auth,  async(req, res)=>{
    const long_goal= req.body.long_goal;
    const user=req.user;
    try {
        const newGoal= new LongGoal({
            long_goal,
            createdBy:user.id
        })

        const goal = await newGoal.save();
        console.log(goal);
        res.json(goal);
    } catch (error) {
        res.status(500).json({
            msg:"error while updating Long Goal"
        })
    }
})

router.get("/long-goals", Auth, async(req, res)=>{
    try {
        const goal = await LongGoal.find({createdBy:req.user.id});
         res.status(201).json({
            goal
        })
    } catch (error) {
        return res.status(400).json({
            msg:"error while getting long-goal", 
            error:error
        })
    }

})

router.put("/long-goal/:goalId", Auth, async(req, res)=>{
    const id=req.params.goalId;
    const long_goal= req.body.long_goal
    const goal= await LongGoal.findById(id)
    if(!goal){
        res.json({
            msg:"goal not found"
        })
    }
    try {
        const Goal = await LongGoal.findByIdAndUpdate(id, {
            long_goal,
            createdBy:req.user.id
        }, {new:true})
        await Goal.save()
        return res.json({
            Goal
        })
    } catch (error) {
        return res.json({
            msg:"Long goal is not updated"
        })
    }
    
})

router.delete("/long-goal/:goalId", Auth, async(req, res)=>{
   try {
    console.log(req.params.goalId);
    await LongGoal.findByIdAndDelete(req.params.goalId);
    res.json({
        msg:'Goal removed'
    });
   } catch (error) {
    res.status(500).send('Server error while deleting goal');
   }
})

module.exports=router;