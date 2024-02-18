const express=require('express')
const {UserModel}=require('../model/User.model')
const jwt = require('jsonwebtoken');


const userRouter=express.Router()


userRouter.post("/register",async(req,res)=>{
    // logic
    const user = new UserModel(req.body)
    try {
        await user.save()
        res.status(200).send({"msg":"New user has been register"})
    } catch (error) {
        res.status(400).send({"error":error.messsage})

    }
})

// login logic
userRouter.post('/login',async(req,res)=>{
    //logic
    // what data i will need to login
    // only email, pass
    const {email, pass}=req.body
    try {
        // find email, pass
      const user= await UserModel.findOne({email,pass})
    //   console.log(user);
    //   res.send("..work in progress")
    if(user){
        const token = jwt.sign({ course: 'backend' }, 'masai');

        res.status(200).send({"msg":"Login Successfull", "token":token})
    }
    else{
        res.status(200).send({"msg":"Wrong Credentials"})

    }
        
    } catch (error) {
        res.status(400).send({"error":error.messsage})
        
    }

})

module.exports={
    userRouter
}