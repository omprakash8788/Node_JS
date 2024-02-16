const express=require('express')


const app=express()


// middleware
app.use((req,res, next)=>{
    //logic
    // console.log("hello from middlware")
    let startTime=new Date().getTime()
    next()
    let endTime=new Date().getTime()
    console.log(`${endTime-startTime}ms`);
})

app.get("/",(req,res)=>{
    console.log('home hu');
    res.send('Home')
})

app.get("/about",(req,res)=>{
    console.log('about hu');
    res.send('about')
})

app.get("/contacts",(req,res)=>{
    res.send('contact')
})

app.get("/data",(req,res)=>{
    res.send('data')
})


app.listen(8080,()=>{
    console.log('Server running at 8080');
})