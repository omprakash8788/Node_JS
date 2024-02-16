const express = require('express')
const mongoose=require("mongoose")

const app=express()

app.get("/",(req,res)=>{
    res.send("home page")
})

// as long as your server is running it should be connect to the db
app.listen(4500, async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/expressDB")
        console.log("connected to the db");
        
    } catch (error) {
        console.log(err);
        console.log("something wrong while connecting to the db");
        
    }
    console.log('server running port number 4500');

})

// i want to coonect my db so what i do create a mongoose Line no 2
