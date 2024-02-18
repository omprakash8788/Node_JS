const express=require('express')
const {UserModel}=require('../model/User.model')
const userRouter=express.Router()


userRouter.post("/register",(req,res)=>{
    // logic
})

// login logic
userRouter.post('/login',(req,res)=>{
    //logic

})

module.exports={
    userRouter
}