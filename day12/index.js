const express=require('express')
const {connection}=require('./db')
const {userRouter}=require('./routes/User.routes')
const app=express()



app.use(express.json())
app.use("/users", userRouter)

app.listen(8080, async()=>{
    try {
        await connection
        console.log("Connected to the db");
        
    } catch (error) {
        console.log(error);
        console.log("Cannot connect to the db");
    }
    console.log('Server running at port 8080');
})