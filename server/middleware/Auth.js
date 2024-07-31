const jwt = require("jsonwebtoken");

module.exports=  function(req, res, next){
    const token = req.header('Authorization');
    if(!token){
        return res.status(401).json({
            msg: "NO token Authorization Denied"
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user= decoded.user;
        next();
    } catch (error) {
        return res.status(401).json({
            msg:"Token not valid"
        })
    }
}