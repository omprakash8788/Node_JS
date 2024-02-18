const express=require('express')
const {connection}=require('./db')
const {userRouter}=require('./routes/User.routes')
const jwt=require('jsonwebtoken')

const app=express()

app.use(express.json())
app.use("/users", userRouter)

// create routes
app.get('/',(req,res)=>{
    res.send('Home page')
})
app.get('/contact',(req,res)=>{
    res.send('contact page')
})

app.get('/about',(req,res)=>{
    res.send('about page')
})
// i want protected my movies route
app.get('/movie',(req,res)=>{
    // verify a token symmetric
    const {token}=req.query
  jwt.verify(token, 'masai',(err, decoded)=> {
    if(decoded){
        res.status(200).send("Movie data")
    }
    else{
        res.status(400).send({"err":err.message})
    }
  });
   
})
// /series
app.get('/series',(req,res)=>{
    // verify a token symmetric
    const {token}=req.query
  jwt.verify(token, 'masai',(err, decoded)=> {
    if(decoded){
        res.status(200).send("series data")
    }
    else{
        res.status(400).send({"err":err.message})
    }
  });
   
})


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