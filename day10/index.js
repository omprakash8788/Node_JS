const express = require('express')
const {connection, UserModel, HeroModel}=require('./db')
const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("home page")
})

//Create Operation(Post)
app.post('/adduser',async (req,res)=>{
    // in case of mongo how to add in db
    // 1. create a new user
    try {
        const user=new UserModel(req.body)
        await user.save()
        res.send("Added the new user") 
    } catch (error) {
        res.send(error)
    }

})

// Read Operation(Get)
app.get("/users",async(req,res)=>{
    try {
        const users= await UserModel.find()
        res.send(users)   
    } catch (error) {
        res.send(error)
    }
})

// Update 

app.patch('/updateuser/:id', async(req,res)=>{
    const {id}=req.params
    try {
      await UserModel.findByIdAndUpdate({_id:id}, req.body) 
      res.send("Data updated")
        
    } catch(error) {
        res.send(error)
        
    }
})


// Delete
app.delete("/deleteuser/:id", async(req,res)=>{
    const {id}=req.params;
    try {
        await UserModel.findByIdAndDelete({_id:id})
        res.send("Data Deleted")
        
    } catch (error) {
        res.send(error)
    }
})

// create two route for superSchema 

//Create Operation(Post)
app.post('/addhero',async (req,res)=>{
    // in case of mongo how to add in db
    // 1. create a new user
    try {
        const hero=new HeroModel(req.body)
        await hero.save()
        res.send("Added the new hero") 
    } catch (error) {
        res.send(error)
    }

})
// read
app.get('/heroes',async (req,res)=>{
   
    try {
        const heroes=await HeroModel.find()
        // await user.save()
        res.send(heroes) 
    } catch (error) {
        res.send(error)
    }

})



// as long as your server is running it should be connect to the db
app.listen(4500, async()=>{
    try {
        await connection
        console.log("connected to the db");
        
    } catch (error) {
        console.log(error);
        console.log("something wrong while connecting to the db");
        
    }
    console.log('server running port number 4500');

})

// i want to coonect my db so what i do create a mongoose Line no 2
