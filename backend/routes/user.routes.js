const express = require("express");
const UserRouter = express.Router();
const { UserModel } = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();


const saltRounds = 10;
UserRouter.post("/register", async (req, res) => {
    try{
        const {fullname, email, password} = req.body;
        bcrypt.hash(password, saltRounds, function(err, hash) {
            if(err){
                res.json(err);
            }else{
            const user = new UserModel({fullname, email, password: hash});
            user.save();
            res.status(200).send({msg:"user registered successfully"});
            }
        });
    }catch(err){
        res.status(400).send({msg:err.message});
    }
})

UserRouter.post("/login", async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await UserModel.findOne({email});
        if(user){
            bcrypt.compare(password, user.password, function(err, result) {
                if(result){
                    const token = jwt.sign({userID: user._id},process.env.SECRETKEY );
                    res.status(200).send({msg:"login successfully", token, fullname: user.fullname});
                }else{
                    res.status(400).send({msg:"wrong credentials"});
                }
            });
        }else{
            res.status(400).send({msg:"wrong credentials"});
        }
    }catch(err){

    }
})

module.exports = {
    UserRouter
}