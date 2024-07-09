const jwt = require("jsonwebtoken");
require("dotenv").config();
const auth =(req,res,next)=>{
    const token  = req.headers.authorization?.split(" ")[1]
    if(token){
        jwt.verify(token,process.env.SECRETKEY,(err,decoded)=>{
            if(err){
                res.json({err});
            }else{
                console.log(decoded);
                req.body.userID = decoded.userID
                req.body.fullname = decoded.fullname
                next()
            }
        })
    }else{
        res.json({msg:"Please Login"})
    }
}

module.exports={
    auth
}