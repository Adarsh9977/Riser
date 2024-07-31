const express= require("express");
const zod= require("zod");
const bcrypt= require("bcryptjs");
const jwt= require("jsonwebtoken");
const User = require("../models/user");
const router = express.Router()

const signupSchema= zod.object({
    username: zod.string(),
    password:zod.string(),
    name:zod.string(),
    email:zod.string().email()
})

router.post("/signup", async(req, res)=>{
    const {username,name, password, email}= req.body;
    const {success}=signupSchema.safeParse(req.body);

    if(!success){
        return res.json({
            message:"Incorrect inputs by zod"
        })
    }

    try {
        let user= await User.findOne({email});
        if(user){
            return res.status(400).json({
                msg:"User already exists"
            })
        }
        user = new User({username,name,email, password});
        await user.save();

        const payload= {
            user: {
                id: user._id,
                username:user.username
            }
        };
        jwt.sign(payload, process.env.JWT_SECRET, (err, token)=>{
            if(err){
                throw err;
            }
            res.json({
                token
            })
        })
        
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error")
    }
})

const loginSchema= zod.object({
    email:zod.string().email(),
    password:zod.string()
})

router.post("/login", async(req, res)=>{
    const {email, password}=req.body;
    const {success}=loginSchema.safeParse(req.body);

    if(!success){
        return res.json({
            msg:"Incorrect inputs"
        })
    }

    try {
        const user= await User.findOne({email});
        if(!user){
            return res.status(403).json({
                msg:"Invalid Credentials"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({
                msg:"Invalid Password"
            })
        }
        const payload= {
            user: {
                id: user._id,
                username:user.username
            }
        };
        const token= jwt.sign(payload, process.env.JWT_SECRET);
        if(!token){
            return res.status(401).json({
                msg:"NO Token Found"
            })
        }
        return res.status(200).json({
            token
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

module.exports= router;